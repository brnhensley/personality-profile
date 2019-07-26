import React from 'react';
import PersonalityBreakdown from './PersonalityBreakdown';
import WordCloud from './WordCloud';

function Watson() {

  return (
    <div>
      <h2>Watson comp here makes API call</h2>
      <PersonalityBreakdown />
      <hr />
      <WordCloud />
    </div>
  );
}

export default Watson;