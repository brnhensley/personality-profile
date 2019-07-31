import React, { useState, useEffect } from 'react';
import rd3 from 'react-d3-library'
import PersonalityBreakdown from './PersonalityBreakdown';


const WatsonInput = () => {

  const [data, setData] = useState({
    watsonResponse: {},
    twitterHandle: '',
    displayHandle: '',
  })

  const callWatsonAPI = () => {
    // setData({...data, displayHandle: data.twitterHandle });
    fetch(`http://localhost:9000/watsonAPI?name=${data.twitterHandle}`)
      .then(res => res.json())
      .then(res => setData({ ...data, watsonResponse: res, displayHandle: data.twitterHandle }))
      .then();
  }

  const getState = () => console.log(data);

  useEffect(() => {
    // callWatsonAPI();
    console.log(JSON.stringify(data.watsonResponse));
    
    return () => {
      //runs function when component unmounts
    }
    // this empty array functions to keep this from constatntly updating
  }, []);

  return (
    <div>
      <button onClick={getState}>GET STATE</button>
      <h1>{data.displayHandle}</h1>

      <h5>{JSON.stringify(data.watsonResponse)}</h5>

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

      <PersonalityBreakdown watsonResponse={data.watsonResponse} />

    </div>
  );




}

export default WatsonInput;
