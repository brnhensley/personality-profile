let express = require("express")
let router = express.Router();

const personality = require('watson-personality')
let watsonData = [];
personality('@gwar')
    .then(function (personalityProfile) {
        watsonData.push(personalityProfile);
    })
    .catch(function (error) {
        console.log('ERROR: ' + error)
    })


router.get("/", function (req, res, next) {
    res.send(watsonData);
});

module.exports = router;