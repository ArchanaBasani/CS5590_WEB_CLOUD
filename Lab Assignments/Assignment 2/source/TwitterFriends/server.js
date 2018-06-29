var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var Twitter = require("twitter");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("port", process.env.PORT || 8000);
app.set("host", process.env.HOST || "0.0.0.0");

var client = new Twitter({
    consumer_key: "fdxhp1vvyrjZgAiULWRqy775F",
    consumer_secret: "cI0nr2V9DP3Vdijm7oqsITFVYVGpZVLd3JpRXRt6VoniSJcB1Q",
    access_token_key: "1937766182-ciyUyn7xPaDMqTlXR1myo2Bikl5c0fjyDyeFyKl",
    access_token_secret: "vzcknjYTLifThNJ6RUwStID41x75JBdSlA2rEpmamwPSq"
});

app.get("/", function(req, res) {
    var name = req.query.screen_name;

    client.get("friends/list", {
        screen_name: name
    }, function(error, tweets, response) {
        if (!error) {
            res.json(tweets);
        } else {
            res.status(500).json({
                error: error
            });
        }
    });
});

app.listen(app.get("port"), function() {
    console.log("app running");
});