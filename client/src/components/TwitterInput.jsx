import React from 'react';
import PropTypes from 'prop-types';

class TwitterInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callTwitterAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  
  let twitterHandle = "gwar";
  let Twit = require('twit')

  let options = {
    method: 'GET',
    mode: 'cors',
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

  function twitterData(err, data, response) {
    console.log(response);
    console.log(err);
    console.log(data);
  }

  T.get('statuses/user_timeline', options.qs, twitterData);

  // _twitterHandle = input.value.trim()
  //   if (!input.value.trim()) {
  //     return;
  //   }
  //   return fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + _twitterHandle + &count=200&exclude_replies=true&include_rts=false')
  //   make api call with _twitterHandle.value.trim()

  render() {
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
