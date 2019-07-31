import React from 'react';
import PersonalityBreakdown from './PersonalityBreakdown';
import WordCloud from './WordCloud';
import WatsonInput from './WatsonInput';

function Watson() {

  return (
    <div>
      <h2>Watson comp here makes API call</h2>
      <WatsonInput />
      
      <hr />
    </div>
  );
}

// add conditional for once the API calls succeed

export default Watson;