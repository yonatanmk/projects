import React from 'react';
import { connect } from 'react-redux';
import { setMovieData } from '../actions';
import SearchForm from '../components/SearchForm';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFormSubmit: (query) => {
      dispatch(setMovieData(query));
    }
  };
};

const SearchFormContainer = connect(null, mapDispatchToProps)(SearchForm);

export default SearchFormContainer;
