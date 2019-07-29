import React from 'react';

function TwitterInput() {

  function twitterCall(event) {
    event.preventDefault();

  }

  return (
    <div>
      <form onSubmit="twitterCall">
      <input id='twitterHandle' placeholder="Enter a Twitter handle"></input>
      <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default TwitterInput;