import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Twitter(props) {
    const [wordsUsed, setWordsUsed] = useState([]);
    const [wordTally, setWordTally] = useState(null);

    const sortAlpha = (a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();

        if (a > b) return 1;
        if (a < b) return -1;
    };

    const createWordArray = () => { // on componenet mount instead?
        let wordArray = [];

        let data = props.tweets.join(' ').replaceAll("’", "'");
        data = data.split(' ').filter(word => !word.startsWith('http'))
            .join(' ').split(/[^a-zA-Z0-9'@#-]/);                         // remove junk chars

        wordCounter(data);      // tally all words

        data.forEach(word => {      // create array of significant words
            if (word.length > 2 || word.toUpperCase() === "I") {
                wordArray.push(word);
            }
        });

        setWordsUsed(wordArray.sort(sortAlpha));
    };

    const wordCounter = (arr) => {
        let count = {};
        arr.forEach(w => {
            if (w.length > 1 || w === "I") {
                w = w[0].toUpperCase() + w.slice(1);
                count[w] = !count[w] ? 1 : count[w] + 1;
            }
        });

        setWordTally(count);
    };

    console.log(wordTally);

    if (wordsUsed.length === 0) {   // to prevent infinite rerenders
        createWordArray();
    }

    return (
        <div className="window">
            <p className="tweets">
                {wordsUsed.join(' ')}
            </p>
        </div>
    );
}

Twitter.propTypes = {
    tweets: PropTypes.array.isRequired
};

export default Twitter;
