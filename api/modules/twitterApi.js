module.exports = twitterApi;
const Twitter = require('twit');

async function twitterApi(username) {
    const twit = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
        timeout_ms: 60 * 1000
    });

    var twitterPath = 'statuses/user_timeline';
    var twitterOptions = {
        screen_name: username,
        count: 200,
        include_rts: false
    };

    return new Promise(function (resolve, reject) {
        twit.get(twitterPath, twitterOptions, function (error, data) {
            if (error) return reject(error);
            var tweets = [];
            for (var i = 0; i < data.length; i++) {
                tweets.push(data[i].text);
            }
            resolve(tweets);
        });
    });
};