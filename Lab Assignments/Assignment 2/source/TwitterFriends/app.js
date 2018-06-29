var angular;
var app = angular.module("TwitterAPP", []);

app.controller = function (s, f) {
    
};
app.controller("serviceCtrl", function($scope, $http) {
    "use strict";
    $scope.search = function() {
        var url = "http://127.0.0.1:8000/?screen_name=" + $scope.screen_name;
        var svg = d3.select("svg");
        var margin = 200;
        var width = svg.attr("width") - margin;
        var height = svg.attr("height") - margin;
        var xAxis = d3.scaleBand().range([0, width]).padding(0.2);
        var yAxis = d3.scaleLinear().range([height, 0]);
        var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

        d3.json(url, function(error, data) {
            if (error) {
                throw error;
            }
            // Name for each user
            var names = [];
            // Friends count for each user
            var count = [];
            // Final data
            var parsed_data = [];
            // Parse the JSON data
            for (var counter in data.users) {
                names.push(data.users[counter].screen_name);
                count.push(data.users[counter].friends_count);
            }
            // Calculate the sum of array count
            var sum = count.reduce(function(l, r) { return l + r}, 0);
            // Match each name with frequency (frequency of freiend count) - Only show 5 records max
            var record = names.length > 5? 5 : names.length;
            for (var i = 0; i < record; i++) {
                parsed_data.push({
                    name: names[i],
                    frequency: parseInt(count[i] / sum * 100)
                });
            }
            // X axis
            xAxis.domain(parsed_data.map(function(d) {return d.name;}));
            // Y axis
            yAxis.domain([0, d3.max(parsed_data, function(d) {return d.frequency;})]);
            // D3
            g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xAxis));
            g.append("g").call(d3.axisLeft(yAxis).tickFormat(function(d) {return d + "%";}).ticks(15));
            g.selectAll(".bar").data(parsed_data).enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) {return xAxis(d.name);})
                .attr("y", function(d) {return yAxis(d.frequency);})
                .attr("width", xAxis.bandwidth())
                .attr("height", function(d) {return height - yAxis(d.frequency);});
            g.append("text").attr("x", width / 2 ).attr("y", -50).style("text-anchor", "middle").text("Screen Name VS. Friends Count Frequency");
        });
    };
});