/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://lesson6:lesson6@ds263138.mlab.com:63138/webcloud';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropDatabase();
    console.log("Database deleted");
});