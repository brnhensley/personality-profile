import React from 'react';

function Header() {

  return (
    <div className="header">
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          justify-content: center;
          text-align: center;
          text-transform: uppercase;
          background-color: skyblue;
          height: 150px;
          background-position: center;
          border: 4px solid black;
          margin: 2%;
          padding: 2%;
          border-radius: 25px;
        }
      `}</style>
      <h1>The Judgement-ometer</h1>
    </div>
  );
}

export default Header;