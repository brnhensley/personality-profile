module.exports = watsonApi;

const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
require('dotenv').config();

function watsonApi(tweets) {
    return new Promise(async function (resolve, reject) {
        var personality_insights = new PersonalityInsightsV3({ version: '2017-10-13' });
        const textToAnalyze = tweets.join(' ');

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
