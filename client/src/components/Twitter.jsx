import React from 'react';
import PropTypes from 'prop-types';
import sample from './../sample.json';

function Twitter(props) {

  let wordArray = [];
  props.tweets.join(' ').split(' ').forEach(word => {
    if (!word.startsWith('http')) {
      wordArray.push(word);
    }
  });
  //this works, but a lot of punctuation makes it in
  wordArray.sort();
  let tweetText = wordArray.join(' ');

  return (
    <div>
      <h2>Tweets by @{sample[0].user.name}</h2>
      <p>
        {tweetText}
      </p>
    </div>
  );
}

Twitter.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Twitter;