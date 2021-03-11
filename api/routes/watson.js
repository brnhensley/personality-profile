let express = require("express");
let router = express.Router();

const watsonApi = require('../modules/watsonApi');

router.post("/", function (req, res, next) {
    if (req.body) {
        watsonApi(req.body)
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