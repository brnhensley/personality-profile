import React, { useState, useEffect } from 'react';

const WatsonInput = () => {

  const [data, setData] = useState({ watsonResponse: [], twitterHandle: "gwar", displayHandle: '' })
  
  const callWatsonAPI = () => {        
    // setData({...data, displayHandle: data.twitterHandle });
    fetch(`http://localhost:9000/watsonAPI?name=${data.twitterHandle}`)
      .then(res => res.json())
      .then(res => setData({...data, watsonResponse: res, displayHandle: data.twitterHandle }));
  }

  const getState = () => console.log(data);

  useEffect(() => {
    callWatsonAPI();
    // this empty array functions to keep this from constatntly updating

    return () => {
      //runs function when component unmounts
    }
  }, []);

  return (
    <div>
      <button onClick={getState}>GET STATE</button>
      <h1>{data.displayHandle}</h1>
      {/* <h1>{state.twitterHandle}</h1> */}
      <h5>{JSON.stringify(data.watsonResponse)}</h5>
      <form onSubmit={event => {
        event.preventDefault()
        callWatsonAPI();
      }
      }>
        <input
          type='text'
          id='twitterHandle'
          placeholder='Enter a Twitter handle'
          onChange={event => setData({ ...data, twitterHandle: event.target.value })}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );




}

export default WatsonInput;
