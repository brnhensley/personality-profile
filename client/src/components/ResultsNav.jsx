import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonalityBreakdown from './PersonalityBreakdown';
import Twitter from './Twitter';

function ResultsNav(props) {
    const [status, setStatus] = useState(true);
    let statusTranslate = { true: "Personality Analysis", false: "Tweet History" };

    let showing = null;
    if (status) {
        showing = <PersonalityBreakdown watsonResponse={props.watsonResponse} />;
    } else {
        showing = <Twitter tweets={props.tweets} />;
    }

    return (
        <>
            <div className="window">
                <h2>{statusTranslate[status]} Twitter user @{props.twitterHandle}</h2>
                <h3 className="toggleLink" onClick={() => setStatus(!status)}>Click to see {statusTranslate[!status]}</h3>
            </div>
            {showing}
        </>
    );
}

ResultsNav.propTypes = {
    twitterHandle: PropTypes.string.isRequired,
    tweets: PropTypes.array.isRequired,
    watsonResponse: PropTypes.object.isRequired
};

export default ResultsNav;