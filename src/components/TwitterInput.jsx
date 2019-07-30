import React from 'react';
import PropTypes from 'prop-types';

class TwitterInput extends React.Component {
  render() {
    let twitterHandle = "";
    var Twit = require('twit')

    let options = {
      method: 'GET',
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
      qs:
      {
        screen_name: twitterHandle,
        count: '200',
        exclude_replies: 'true',
        include_rts: 'false'
      },
      headers:
      {
        'Access-Control-Allow-Origin': '*',
        'Postman-Token': '78c012d1-a99e-443f-8d56-0485353326a3',
        'cache-control': 'no-cache',
        Authorization: 'OAuth oauth_consumer_key="91qUH40KKYe3Y5CNUhyGMLFXU",oauth_token="1151949815573405696-pEGj46R4jXLMSgbIG32gGMvdMkwxVy",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1564422435",oauth_nonce="KUX9dbFqnHc",oauth_version="1.0",oauth_signature="TGChvNprZQgqAGrnnCG3OrzuWFI%3D"',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    //   console.log(body);
    // });


    var T = new Twit({
      consumer_key: '91qUH40KKYe3Y5CNUhyGMLFXU',
      consumer_secret: 'ohIPllkoAoThSkursHRZcBj6Bl5DmugFAsfVNr4257sNggxxmQ',
      access_token: '1151949815573405696-pEGj46R4jXLMSgbIG32gGMvdMkwxVy',
      access_token_secret: 'rt8Igro7LumUnekUViby0WVWzerjWrxY3h8FLlUuIm6rf',
    })


    function twitterCall(event) {
      event.preventDefault();
      console.log(twitterHandle.value);
      console.log(options.qs.screen_name);

      fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + twitterHandle.value + '&count=200&exclude_replies=true&include_rts=false', options).then(
        response => console.log("RESPONSE: " + response.json()),
        error => console.log('ERROR: ' + error)
      ).then(
        console.log("it got to the second then")
      )
    }

    function twitterData (err, data, response){
      console.log(data)
      console.log("twit worked");

    }

    T.get('statuses/user_timeline', options.qs, twitterData);

    // _twitterHandle = input.value.trim()
    //   if (!input.value.trim()) {
    //     return;
    //   }
    //   return fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + _twitterHandle + &count=200&exclude_replies=true&include_rts=false')
    //   make api call with _twitterHandle.value.trim()

    return (
      <div>
        <form onSubmit={twitterCall}>
          <input
            type='text'
            id='twitterHandle'
            placeholder='Enter a Twitter handle'
            ref={(input) => { twitterHandle = input; }}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}
// TwitterInput.propTypes = {
//   dispatch: PropTypes.func
// }

export default TwitterInput;

//
// Twit has promise support; you can use the callback API,
// promise API, or both at the same time.
//
T.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.

    console.log('data', result.data);
  })

//
// get `funny` twitter users
//
T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
  console.log(data)
})