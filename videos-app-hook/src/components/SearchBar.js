import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: Make sure we call
    //callback from parent component

    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search For A Video</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
