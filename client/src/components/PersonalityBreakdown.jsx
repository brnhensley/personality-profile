import React from 'react';
import watsonSample from './../watsonSample.json'
import PropTypes from 'prop-types';


function PersonalityBreakdown(props) {

  let display = '';
  let results = '';
  if(props.watsonResponse.length > 0) {
    display = "Results: "
    results = '{JSON.stringify(props.watsonResponse)}'
    console.log("BREAKDOWN IF PASSING");
    
  }

  return (
    <div>
      <h1>PersonalityBreakdown works</h1>
      {/* <h5>{JSON.stringify(watsonSample)}</h5> */}
      <h3 id='shitcock'>{display}</h3>
      <h5>{results}</h5>
    </div>
  );
}

PersonalityBreakdown.propTypes = {
  watsonResponse: PropTypes.object
};

export default PersonalityBreakdown;