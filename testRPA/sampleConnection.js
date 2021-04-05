var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    app = express(),
    router=new express.Router();
         request = require('request');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/', router);

router.get('/external-api', function(req, res) {
    request({
        method:'GET',
        uri:'http://localhost:'+(process.env.PORT || 3500)
    }, function(error, response, body) {
        if(error){throw error;}

        var movies = [];
        _.each(JSON.parse(body), function(elem, index) {
            movies.push({
                Title:elem.Title,
                Rating:elem.Rating
            });
        });
        res.json(_.sortBy(movies, 'Rating').reverse());
    })
});

//출처: https://uxicode.tistory.com/entry/request-nodejs에서-외부API-소비 [세줄코딩]
