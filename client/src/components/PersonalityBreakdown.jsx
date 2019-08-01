import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// for offline emergency testing
// import watsonSample from './../watsonSample.json'


function PersonalityBreakdown(props) {
  let results = JSON.parse(JSON.stringify(props.watsonResponse));

  return (
    <div>
      <h1>Big Five Personality Traits</h1>

      {Object.values(results.traits).map(function (personalityTrait) {
        return <div>
          <h2>{personalityTrait.name}: {(personalityTrait.percentile * 100).toFixed(2)}%</h2>

          {Object.values(personalityTrait.children).map(function (subTrait) {
            return <h5>{subTrait.name} - {(subTrait.percentile * 100).toFixed(2)}%</h5>
          })}
          <h6>==================================================</h6>
        </div>
      })}

      <h4>==================================================</h4>
      <h1>Needs</h1>

      {Object.values(results.needs).map(function (need) {
        return <h3>{need.name}: {(need.percentile * 100).toFixed(2)}%</h3>
      })}

    </div>
  );
}

PersonalityBreakdown.propTypes = {
  watsonResponse: PropTypes.any.isRequired
};

export default PersonalityBreakdown;