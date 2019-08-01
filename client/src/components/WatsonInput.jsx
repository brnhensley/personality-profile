import React, { useState, useEffect } from 'react';
import rd3 from 'react-d3-library'
import PersonalityBreakdown from './PersonalityBreakdown';


const WatsonInput = () => {

  const [data, setData] = useState({
    watsonResponse: null,
    twitterHandle: '',
    displayHandle: '',
  })

  const callWatsonAPI = () => {
    fetch(`http://localhost:9000/watsonAPI?name=${data.twitterHandle}`)
      .then(res => res.json())
      .then(res => setData({ ...data, watsonResponse: res, displayHandle: data.twitterHandle }))
      .then();
  }

  let searchedUser = null;
  if (data.displayHandle !== '') {
  }

  let personalityBreakdown = null;
  if (data.watsonResponse !== null) {
    personalityBreakdown = <PersonalityBreakdown watsonResponse={data.watsonResponse} />;
    searchedUser = <h1>Results for @{data.displayHandle}</h1>
  }

  return (
    <div>
      <h3>Enter a Twitter user's handle to get a personality breakdown based on their posting history</h3>
      <form onSubmit={event => {
        event.preventDefault()
        callWatsonAPI();
      }}>

        <input
          type='text'
          id='twitterHandle'
          placeholder='Enter a Twitter handle'
          onChange={event => setData({ ...data, twitterHandle: event.target.value })}
        />

        <button type='submit'>Search</button>
      </form>

      {searchedUser}
      {personalityBreakdown}

      <br/><br/>
    </div>
  );

}

export default WatsonInput;

  // useful for ongoing testing purposes
  // const getState = () => console.log(data);
  // <button onClick={getState}>GET STATE</button>
