import React from 'react';
import sample from './../sample.json'
import TwitterInput from './TwitterInput.jsx';

function Twitter() {
  console.log(sample);
  let tweetText = [];
  let tweetHTML = [];
  // sample.map((tweet) =>
  //   <li>{tweet.text}</li>,
  //   tweetText.push(tweet.text)
  // );

  // loops through full Twitter JSON lists them and add the tweets to an array
  sample.forEach(tweet => {
    tweetHTML.push(<li>{tweet.text}</li>);
    tweetText.push(tweet.text);
  });

  // Finds index of https link and cuts it off before creating master tweetText
  // tweetText.push(tweet.text.slice(0, tweet.text.indexOf('https://')).trim());

  // makes an array of every word tweeted
  let wordArray = [];
  tweetText.join(' ').split(' ').forEach(word => {
    if (!word.startsWith('https')) {
      wordArray.push(word)
    }
  });
  //this works, but a lot of punctuation makes it in
  wordArray.sort();
  tweetText = wordArray.join(' ')

  console.log(wordArray);
  console.log(tweetText);

  return (
    <div>
      <TwitterInput />
      <h2>Tweets by @{sample[0].user.name}</h2>
      <ul>
        {tweetHTML}
      </ul>
    </div>
  );
}

export default Twitter;