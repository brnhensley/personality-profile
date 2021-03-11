# _Personality Profile_

#### _This is a webapp that takes a Twitter handle and returns a personality profile based on their tweet history created by IBM's Watson._

#### _By Brian Hensley_
#### _7-19-19_

## _Project Description_

_This is a webapp built with a React front-end and an Express Node.JS back-end as a proxy to make the API call to IBM's Watson._

_The original proposal for this capstone project was to make two API calls- one to Twitter for a users tweet history, and one to send that history to IBM's Watson to return a personality breakdown based on that history. What I was able to accomplish was to successfully use IBM's Watson to pull that history itself and return that data with just a single API call._

## _Setup/Installation Requirements_

* _Clone repo_
* _run `npm install` from the `api` directory_
* _run `npm start` from the `api` directory_
* _run `npm install` from the `client` directory_
* _run `npm start` from the `client` directory_
 * _you'll need to create a Twitter developer account and get the following api credentials to use the app_
* _create a `.env` file in the `api` directory and put the text from **API Keys** inside_
* _navigate to http://localhost:3000/_
* _enter a Twitter handle in the search field and get your results_

## _API Keys_

 ```
CONSUMER_KEY=<your Twitter consumer key>
CONSUMER_SECRET=<your Twitter consumer secret>
ACCESS_TOKEN_KEY=<your Twitter access token key>
ACCESS_TOKEN_SECRET=<your Twitter access token secret>
```

## _Original Component Plan_
![ss1](https://github.com/brnhensley/personality-profile/blob/master/comptree.png)

## _Known Bugs_

* _No known bugs_

## _Support and contact details_

Create a pull request on GitHub.

## _Technologies Used_

I used React, Javascript, Node, Express, Twitter API, Watson API, HTML, CSS, and DuckDuckGo to build this program.

### _License_

GPL, keep information free.

Copyright (c) 2019 Brian Hensley
