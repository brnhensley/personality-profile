let express = require("express")
let router = express.Router();

const personality = require('watson-personality')
let profileData = [];
personality('gwar')
    .then(function (personalityProfile) {
        profileData.push(personalityProfile);
    })
    .catch(function (error) {
        console.log(error)
    })


router.get("/", function (req, res, next) {
    console.log("HANDLE" + req.params.handle);
    res.send(profileData);
    console.log(profileData);
});

module.exports = router;