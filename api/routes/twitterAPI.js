let express = require("express")
let router = express.Router();

const personality = require('watson-personality')
let hold = [];
personality('@gwar')
    .then(function (personalityProfile) {
        hold.push(personalityProfile);
    })
    .catch(function (error) {
        console.log(error)
    })


router.get("/", function (req, res, next) {

    
    
    res.send(hold);
});

module.exports = router;