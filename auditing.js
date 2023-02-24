{
    atype: "<string>",
    ts : { $date: "<timestamp>" },
    uuid : { $binary: "<string>", $type: "<string>" },
    local: { ip: "<string>", port: "<int>" || isSystemUser: "<boolean>" || unix: "<string>" },
    remote: { ip: "<string>", port: "<int>" || isSystemUser: "<boolean>" || unix: "<string>" },
    users : [ { user: "<string>", db: "<string>" } ],
    roles: [ { role: "<string>", db: "<string>" }, ... ],
    param: "<document>",
    result: "<int>"
}





{
    atype: "authCheck",
    "param.command": { $in: [ "find", "insert", "delete", "update", "findandmodify" ] }
}


{
    atype: "authCheck",
    "param.ns": "test.orders",
    "param.command": { $in: [ "find", "insert", "delete", "update", "findandmodify" ] }
}