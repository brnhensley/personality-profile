import React from 'react';
import sample from './../sample.json'

function Twitter() {
  console.log(sample);

  return (
    <div>
      <h2>Twitter comp here makes API call</h2>
      <ul>
        {sample.map((tweet) =>
          <li>{tweet.text}</li>
        )}
      </ul>
    </div>
  );
}

export default Twitter;