import React from 'react';

function Footer() {

  return (
    <div className="footer">
      <style jsx>{`
        .footer {
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
      <h3>FOOTER</h3>
    </div>
  );
}

export default Footer;