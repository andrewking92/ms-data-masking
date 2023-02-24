// SETUP
// use ms_masking;
// db.dropDatabase();


var doc = {
    _id: 1,
    level: 1,
    acct_id: "xyz123",
    cc: {
      level: 5,
      type: "yy",
      num: 000000000000,
      exp_date: ISODate("2015-11-01T00:00:00.000Z"),
      billing_addr: {
        level: 5,
        addr1: "123 ABC Street",
        city: "Some City"
      },
      shipping_addr: [
        {
          level: 3,
          addr1: "987 XYZ Ave",
          city: "Some City"
        },
        {
          level: 3,
          addr1: "PO Box 0123",
          city: "Some City"
        }
      ]
    },
    status: "A"
}


db.accounts.insertOne(doc)


db.accounts.aggregate(
    [
      { $match: { status: "A" } },
      {
        $redact: {
          $cond: {
            if: { $eq: [ "$level", 5 ] },
            then: "$$PRUNE",
            else: "$$DESCEND"
          }
        }
      }
    ]
  );



// OUTPUT
// {
//     "_id" : 1,
//     "level" : 1,
//     "acct_id" : "xyz123",
//     "status" : "A"
// }