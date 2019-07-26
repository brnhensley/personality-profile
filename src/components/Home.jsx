import React from 'react';
import Twitter from './Twitter';
import Watson from './Watson';

  function Home() {

    return (
      <div>
        <h2>Home screen start</h2>
        <Twitter />
        <Watson />
        <h2>Home screen end</h2>
      </div>
    );
  }

export default Home;