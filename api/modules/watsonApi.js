// node_modules/watson-personality/personality.js

module.exports = watsonApi;

const twitter = require('./twitterApi');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
require('dotenv').config();

function watsonApi(username) {
    return new Promise(async function (resolve, reject) {
        var personality_insights = new PersonalityInsightsV3({ version: '2017-10-13' });
        const textToAnalyze = await twitter(username).then(tweets => tweets.join(' '));

        personality_insights.profile({ text: textToAnalyze }, (error, response) => {
            if (error) return reject(error);
            else {
                const personalityProfile = {
                    traits: response.personality,
                    needs: response.needs
                };
                resolve(personalityProfile);
            }
        });
    });
}
