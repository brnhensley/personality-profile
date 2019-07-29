import React from 'react';
import PropTypes from 'prop-types';



class TwitterInput extends React.Component {

  render() {

  // state = {
  //   _twitterHandle: ""
  // }
  let twitterHandle = "";

  function twitterCall (event) {
    event.preventDefault();
    console.log(twitterHandle.value);
  }

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