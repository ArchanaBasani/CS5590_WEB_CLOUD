var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var Twitter = require("twitter");
var fs = require('fs');
var request = require('request')

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("port", process.env.PORT || 8000);
app.set("host", process.env.HOST || "0.0.0.0");

// For CORS Issue
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

var client = new Twitter({
    consumer_key: "fdxhp1vvyrjZgAiULWRqy775F",
    consumer_secret: "cI0nr2V9DP3Vdijm7oqsITFVYVGpZVLd3JpRXRt6VoniSJcB1Q",
    access_token_key: "1937766182-ciyUyn7xPaDMqTlXR1myo2Bikl5c0fjyDyeFyKl",
    access_token_secret: "vzcknjYTLifThNJ6RUwStID41x75JBdSlA2rEpmamwPSq"
});

app.get('/:screen_name',function(req,res){
    var name = req.params.screen_name;
    var url = 'https://api.twitter.com/1.1/friends/list.json?cursor=-1&skip_status=true&include_user_entities=false&screen_name='+name;
    request({ url: url,
        method:'GET',
       
    }, function(err, resp, data) {
        var data1 = JSON.parse(data);
        // Stringfying the Data
        var data2 = JSON.stringify([data1], null, 2);
        var obj = JSON.parse(data2)[0];
        console.log(obj);
        obj.children = obj.users;
            delete obj.users;
            data2 = JSON.stringify([obj], null, 2);
            fs.writeFileSync('output.json',data2);
            res.send("Success");
    });
});

app.listen(app.get("port"), function() {
    console.log("app running");
});