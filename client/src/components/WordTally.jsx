import React, { useState } from 'react';
import PropTypes from 'prop-types';


function WordTally(props) {
    const [words, setWords] = useState([]);

    if (words.length < 1) setWords(Object.keys(props.tally).map(word => [word, props.tally[word]]));

    const sortAlpha = () => {
        setWords(words.slice(0).sort((a, b) => {        // .slice to fix the shallow clone problem of mutating state
            if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
            if (b[0].toLowerCase() < b[0].toLowerCase()) return -1;
        }));
    };

    const sortCount = () => {
        setWords(words.slice(0).sort((a, b) => {
            if (a[1] < b[1]) return 1;
            if (a[1] > b[1]) return -1;
        }));
    };

    return (<>
        <button onClick={sortAlpha}>Sort alphabetically</button> <button onClick={sortCount}>Sort by count</button>
        {words.map(word => {
            return <p key={words.indexOf(word)}><strong>"{word[0]}"</strong> tweeted {word[1]} time{(word[1] > 1) ? "s" : ""}</p>;
        })}
    </>);
};

WordTally.propTypes = {
    tally: PropTypes.object.isRequired
};

export default WordTally;