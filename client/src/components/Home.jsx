import React from 'react';
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
          font-family: monospace
          padding: 2%;
          border-radius: 25px;
        }
      `}</style>

      <Watson />

    </div>
  );
}

export default Home;