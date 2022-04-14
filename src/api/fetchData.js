import React, { useState, useEffect } from 'react';

export function fetchData() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((results) => results.json())
      .then((data) => {
        const name = data.results;
        setChar(name);
      });
  }, []);
  console.log(char);
  return char;
}
