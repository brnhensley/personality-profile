import React from 'react';
import Twitter from './Twitter';
import Watson from './Watson';

  function Home() {

    return (
      <div className="home">
        <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          justify-content: center;
          text-align: center;
          text-transform: uppercase;
          background-color: skyblue;
          background-position: center;
          border: 4px solid black;
          margin: 2%;
          padding: 2%;
          border-radius: 25px;
        }
      `}</style>
        <h2>Home screen start</h2>
        <Twitter />
        <Watson />
        <h2>Home screen end</h2>
      </div>
    );
  }

export default Home;