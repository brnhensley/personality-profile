import React, { useEffect, useState } from 'react';
import watsonSample from './../watsonSample.json'
import PropTypes from 'prop-types';


function PersonalityBreakdown(props) {

  let display = '';
  let results = '';
  let data = JSON.parse(JSON.stringify(props.watsonResponse));
  console.log(data);
  

  if(props.watsonResponse !== {}) {
    display = "Results: "
    // results = '{JSON.stringify(props.watsonResponse)}'
    console.log("BREAKDOWN IS PASSING");
    
  }

  useEffect(() => {
    // callWatsonAPI();
    console.log(JSON.stringify(watsonSample));
    
    return () => {
      //runs function when component unmounts
    }
    // this empty array functions to keep this from constatntly updating
  }, []);
  return (
    <div>
      <h1>PersonalityBreakdown works</h1>
      <h3>{display}</h3>
      {/* <h5>{props.watsonResponse.TRAITS}</h5> */}
      {/* <h5>{JSON.stringify(watsonSample)}</h5> */}
      {/* <h5>{data[0].TRAITS}</h5> */}
    </div>
  );
}

PersonalityBreakdown.propTypes = {
  watsonResponse: PropTypes.any
};

export default PersonalityBreakdown;