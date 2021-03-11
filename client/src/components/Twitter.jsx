import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WordTally from './WordTally';

function Twitter(props) {
    const [wordsUsed, setWordsUsed] = useState([]);
    const [wordTally, setWordTally] = useState(null);
    const [tallyOrText, setTallyOrText] = useState(true);

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
            .join(' ').split(/[^a-zA-Z0-9'@#_-]/);        // remove junk chars

        data.forEach(word => {      // create array of significant words
            if (word.length > 2 || word.toUpperCase() === "I") {
                wordArray.push(word);
            }
        });

        wordArray = wordArray.sort(sortAlpha);
        wordCounter(wordArray);
        setWordsUsed(wordArray);
    };

    const wordCounter = (arr) => {
        let count = {};
        arr.forEach(w => {
            w = w[0].toUpperCase() + w.slice(1);
            count[w] = !count[w] ? 1 : count[w] + 1;
        });

        setWordTally(count);
    };

    if (wordsUsed.length === 0) {   // to prevent infinite rerenders
        createWordArray();
    }

    let output = null;
    if (tallyOrText) {
        output = <p>{wordsUsed.join(' ')}</p>;
    } else {
        output = <WordTally tally={wordTally} />;
    }

    return (
        <div className="window">
            <h3 className="toggleLink" onClick={() => setTallyOrText(!tallyOrText)}>
                Click to see {tallyOrText ? "a tally of words used" : "a list of words used"}
            </h3>
            <div className="tweets">{output}</div>
        </div>
    );
}

Twitter.propTypes = {
    tweets: PropTypes.array.isRequired
};

export default Twitter;
