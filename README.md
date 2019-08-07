# _Personality Profile_

#### _This is a webapp that takes a Twitter handle and returns a personality profile based on their tweet history created by IMB's Watson._

#### _By Brian Hensley_
#### _7-19-19_

## _Project Description_

_This is a webapp build with a React front-end and an Express Node.JS back-end as a proxy to make the API call to Watson._

_The original proposal for this capstone project was to make two API calls- one to Twitter for a users tweet history, and one to send that history to IBM's Watson to return a personality breakdown based on that history. What I was able to accomplish was to successfully use IBM's Watson to pull that history itself and return that data with just a single API call._

## _Setup/Installation Requirements_

* _Clone repo_
* _run $ npm install from the api directory_
* _replace api/node_modules/watson-personality/personality.js with a copy of api/personality.js_
* _run $ npm start from the api directory_
* _run $ npm install from the client directory_
* _run $ npm start from the client directory_
* _navigate to http://localhost:3000/_
* _enter a Twitter handle in the search field and get your results_

## _Original Component Plan_
![ss1](https://github.com/brnhensley/personality-profile/blob/master/comptree.png)

## _Known Bugs_

* _Sometimes the page won't update with the new data after making a second API call, it will need to be refreshed._

## _Support and contact details_

Create a pull request on GitHub.

## _Technologies Used_

I used React, Javascript, Node, WebPack, Express, Watson API, HTML, CSS, and DuckDuckGo to build this program.

### _License_

GPL, keep information free.

Copyright (c) 2019 Brian Hensley