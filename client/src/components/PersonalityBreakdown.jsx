import React, { useEffect, useState } from 'react';
import watsonSample from './../watsonSample.json'
import PropTypes from 'prop-types';


function PersonalityBreakdown(props) {

  // let displayResultsHeader = '';
  let results = JSON.parse(JSON.stringify(props.watsonResponse));
  console.log(results.traits);

  let displayData;
  let li = document.createElement("LI");

  // if (props.watsonResponse !== {}) {
  //   displayResultsHeader = "Results: "
  // }

  return (
    <div>
      <h1>Big Five Personality Traits</h1>
    
       {Object.values(results.traits).map(function (personalityTrait) {
        return <div><h2>{personalityTrait.name}: {(personalityTrait.percentile*100).toFixed(2)}%</h2> {Object.values(personalityTrait.children).map(function (subTrait) {
          return <h4>{subTrait.name} - {(subTrait.percentile*100).toFixed(2)}%</h4>
        })}</div>
      })}
    
      <h1>Needs</h1>
      {Object.values(results.needs).map(function (need) {
        console.log(need)
        return <div><h3>{need.name}: {(need.percentile*100).toFixed(2)}%</h3></div> 
      })}


    </div>
  );
}

PersonalityBreakdown.propTypes = {
  watsonResponse: PropTypes.any
};

export default PersonalityBreakdown;