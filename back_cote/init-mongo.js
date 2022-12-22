db.createUser ({
    user : "tp_api",
    pwd : "apipass",
    roles : [{
        role : "readWrite", db : "apidb"
    }]
});

db.auth('tp_api', 'apipass');