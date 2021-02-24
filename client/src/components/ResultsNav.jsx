import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonalityBreakdown from './PersonalityBreakdown';
import Twitter from './Twitter';

function ResultsNav(props) {
    const [status, setStatus] = useState(true);
    let statusTranslate = ["Personality Analysis", "Tweets"];

    if (false) setStatus(false);

    let showing = null;
    if (status) {
        showing = <PersonalityBreakdown watsonResponse={props.watsonResponse} />;
    } else {
        showing = <Twitter tweets={props.tweets} />;
    }

    return (
        <>
            <div className="window">
                <h2>{statusTranslate} of Twitter user @{props.twitterHandle}</h2>
                {/* <h3 class="link" onClick={setStatus(!status)}>Click to see tweet history</h3> */}
            </div>
            {showing}
        </>
    );
}

ResultsNav.propTypes = {
    twitterHandle: PropTypes.string.isRequired,
    tweets: PropTypes.array.isRequired,
    watsonResponse: PropTypes.object//.isRequired
};

export default ResultsNav;