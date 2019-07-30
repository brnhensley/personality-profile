import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';

const middlewares = [thunk];

createStore(rootReducer, initialState, applyMiddleware(...middlewares));



var options = {
  method: 'GET',
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
  qs:
  {
    screen_name: _twitterHandle,
    count: '200',
    exclude_replies: 'true',
    include_rts: 'false'
  },
  headers:
  {
    'Postman-Token': '78c012d1-a99e-443f-8d56-0485353326a3',
    'cache-control': 'no-cache',
    Authorization: 'OAuth oauth_consumer_key="91qUH40KKYe3Y5CNUhyGMLFXU",oauth_token="1151949815573405696-pEGj46R4jXLMSgbIG32gGMvdMkwxVy",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1564422435",oauth_nonce="KUX9dbFqnHc",oauth_version="1.0",oauth_signature="TGChvNprZQgqAGrnnCG3OrzuWFI%3D"',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});