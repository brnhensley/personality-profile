# Watson Personality

Gets a Twitter user's personality profile using IBM's Watson.

## Usage
```
npm install watson-personality
```

Create a `.env` file with credentials for Watson and Twitter. Make sure to also include the url to Watson's Personality API. Something like this:

```
url=https://gateway.watsonplatform.net/personality-insights/api
PASSWORD=watson_password
USERNAME=watson_username
CONSUMER_KEY=Twitter_consumer_key
CONSUMER_SECRET=Twitter_consumer_secret
ACCESS_TOKEN_KEY=Twitter_access_token
ACCESS_TOKEN_SECRET=Twitter_access_token_secret
```

Then use it in your script with Promise syntax:
```
// app.js

const personality = require('watson-personality')

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
    console.log(personalityProfile.needs)
  })
  .catch(function(error) {
    console.log(error)
  })
```
