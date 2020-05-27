import React from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchPage.css';

const SearchPage = (props) => {

  const getSuggestions = value => {
    //remove whitespace and make the value lowercase
    const inputValue = value.trim().toLowerCase();
    
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : props.allSchools.filter(school =>
      school._id.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  return (
    <section className="SearchPage-section">
      <div className="SearchPage-searchContainer">
        <h1>School Search</h1>
        <form method="GET" onSubmit={props.handleSubmit}>
          <label htmlFor="schoolName" className="visuallyhidden">Name of School</label>
          <Autosuggest
            inputProps={{
              placeholder: "Type your school",
              name: "schoolName",
              id: "schoolName",
              value: props.schoolInput,
              onChange: (e, { newValue }) => {
                props.setSchoolInput(newValue);
                //controlling the input value
              },
            }}
            shouldRenderSuggestions={() => true}
            suggestions={props.suggestions}
            onSuggestionsFetchRequested={({ value }) => {
              if (!value) {
                props.setSuggestions(props.allSchools);
                return;
              } else {
                props.setSuggestions(getSuggestions(value));
              }
            }}
            onSuggestionsClearRequested={() => {
              props.setSuggestions([]);
            }}
            getSuggestionValue={(suggestion) => {
              return suggestion._id;
            }}
            renderSuggestion={suggestion => (
              <div>
                {suggestion._id}
              </div>
            )}
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default SearchPage;
