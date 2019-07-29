import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function TwitterInput({dispatch}) {

  let _twitterHandle = null;

  var request = require("request");

  // function twitterCall(event) {
  //   event.preventDefault();
  //   if (!input.value.trim()) {
  //     return;
  //   }
  //   return fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + _twitterHandle + &count=200&exclude_replies=true&include_rts=false')

  //   make api call with _twitterHandle.value.trim()
  // }

  return (
    <div>
      <form onSubmit="twitterCall"

      >
        <input
          id='twitterHandle'
          placeholder='Enter a Twitter handle'>
          ref={(input) => {_twitterHandle = input;}}
        </input>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

TwitterInput.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(TwitterInput);