import React from 'react';
import PropTypes from 'prop-types';

function Twitter(props) {
  const sortAlpha = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a > b) return 1;
    if (a < b) return -1;
  };

  const createWordArray = () => {
    let wordArray = [];
    props.tweets.join(' ').split(' ')
      .filter(word => !word.startsWith('http')).join(' ')
      .split(/[^a-zA-Z'@#-]/).forEach(word => {
        wordArray.push(word);
      });

    return wordArray.sort(sortAlpha).join(' ');
  };

  let tweetText = createWordArray();

  return (
    <div className="window">
      <p className="tweets">
        {tweetText}
      </p>
    </div>
  );
}

Twitter.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Twitter;
