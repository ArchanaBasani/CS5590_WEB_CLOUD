/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://<root>:<root>@ds263138.mlab.com:63138/webcloud';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
