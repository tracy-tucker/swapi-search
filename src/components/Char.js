import React from 'react';

const Char = ({ chars }) => {
  return (
    <div>
      {chars.map((char, index) => {
        return (
          <div key={index}>
            <h3>NAME: {char.name}</h3>
            <h5>HEIGHT: {char.height}cm</h5>
          </div>
        );
      })}
      {/* <div key={index}> */}
      {/* <h1>NAME: {char.name}</h1> */}
      {/* <h3>HEIGHT: {char.height}</h3> */}
      {/* </div> */}
    </div>
  );
};

export default Char;
