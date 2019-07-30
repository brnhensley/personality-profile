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
        p {
          color: lightgrey;
          font-size: 5px;
        }
      `}</style>
      <p>© 2019 Brian Hensley</p>
    </div>
  );
}

export default Footer;