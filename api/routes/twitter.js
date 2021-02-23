let express = require("express");
let router = express.Router();

const twitterApi = require('../modules/twitterApi');

router.get("/", function (req, res, next) {
    if (req.query.username) {
        twitterApi(req.query.username)
            .then((tweets) => {
                res.send(tweets);
            })
            .catch((error) => {
                console.log(`ERROR: ${error}`);
                res.send(`ERROR: ${error}`);
            });
    }
});

module.exports = router;