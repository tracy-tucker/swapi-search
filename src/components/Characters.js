import React, { useState, useEffect } from 'react';
import Char from './Char';
import SearchBox from './SearchBox';

const Characters = () => {
  const [chars, setChars] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredChars, setFilteredChars] = useState(chars);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((results) => results.json())
      .then((data) => {
        const name = data.results;
        setChars(name);
      });
  }, []);

  // creating a side effect
  // filtering chars, based on the includes of the search field result.
  // adding array of chars and searchField at the end to prevent looping of fetching characters.
  useEffect(() => {
    const newFilteredChars = chars.filter(
      (char) => {
        return char.name.toLocaleLowerCase().includes(searchField);
      },
      [chars, searchField]
    );
    setFilteredChars(newFilteredChars);
  }, [chars, searchField]);

  // grab the event value from typing in search
  // setting the searchfield to the resulted value
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  // passing in onSearchChange function to trigger onChange event handler when input is received.
  return (
    <div>
      <SearchBox placeholder="SEARCH SW" onChangeHandler={onSearchChange} />
      <Char chars={filteredChars} />
    </div>
  );
};

export default Characters;

// notes on search
