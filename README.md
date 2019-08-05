# _Personality Profile_

#### _This is a webapp that takes a Twitter handle and returns a personality profile based on their tweet history created by IMB's Watson._

#### _By Brian Hensley_
#### _7-19-19_

# _Project Description_

## _Setup/Installation Requirements_

* _Clone repo_
* _run $ npm install from the api directory_
* _replace api/node_modules/watson-personality/personality.js with a copy of api/personality.js_
* _run $ npm start from the api directory_
* _run $ npm install from the client directory_
* _run $ npm start from the client directory_
* _navigate to http://localhost:3000/_
* _enter a Twitter handle in the search field and get your results_

# _Project Proposal_

* Project’s Purpose or Goal: _The general goal is to create an interesting breakdown of Twitter users personalities_

* List the absolute minimum features the project requires to meet this purpose or goal:

1.  User enters a Twitter handle and it makes an API call to Twitter to grab their tweets
2.  API call to IBM's Watson to analyze and return data based on the text of those tweets
3.  Display a personality analysis of the Twitter user based on analysis created by Watson

* What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

1.  React, Node, NPM
2.  Twitter API
3.  Watson API
4.  HTML, CSS, Material/Materialize or Bootstrap

* If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

1.  Word cloud (interactive?) of the most common words used by user. Or some other visual representation of language used.
2.  Collect and analyze tweets of all users who retweet or favorite a specific user, return personality profile of the average 'fan' of that user.
3.  ...Profit?

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

1.  Mostly just diving deeper into those API calls.
2.  Twitter user login to get a profile of their followers

## _Component Plan_
![ss1](https://github.com/brnhensley/personality-profile/blob/master/comptree.png)

# Friday 9-17-2019
* _8-10 - learned to use Postman, create component tree_
* _11-12 - Worked on getting data returned from of the Watson API_
* _12-2 - Signed up for Twitter, reading docs, started Twitter project requirements_
* _2-5 - Tried to understand the APIs basically all day_

## _Support and contact details_

Create a pull request on GitHub.

## _Technologies Used_

I will use React, Javascript, HTML, CSS, Node, WebPack, Twitter API, Watson API and DuckDuckGo to build this program.

### _License_

GPL, keep information free.

Copyright (c) 2019 Brian Hensley
