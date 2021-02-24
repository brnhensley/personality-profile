let express = require("express");
let router = express.Router();

const watsonApi = require('../modules/watsonApi');

router.get("/", function (req, res, next) {
    if (req.query.username) {
        watsonApi(req.query.username)
            .then((personalityProfile) => {
                res.send(personalityProfile);
            })
            .catch((error) => {
                console.log(`ERROR: ${error}`);
                res.send(`ERROR: ${error}`);
            });
    }
});

module.exports = router;