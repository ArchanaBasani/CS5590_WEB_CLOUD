/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://<root>:<root>@ds263138.mlab.com:63138/webcloud';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("aplwebdemo");
    dbase.dropCollection("newCollection", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});