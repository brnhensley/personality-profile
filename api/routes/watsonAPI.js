let express = require("express")
let router = express.Router();

const personality = require('watson-personality')

router.get("/", function (req, res, next) {
    console.log(req.query.name);
    if (req.query.name) {
        personality(req.query.name)
        .then((personalityProfile) => {
            res.send(personalityProfile);
        })
        .catch(function (error) {
            console.log('ERROR: ' + error)
        })

    }
});

module.exports = router;