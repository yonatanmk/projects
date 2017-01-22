import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import MovieList from '../components/MovieList';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleUpdateClick: (selectedFolderId, selectedNoteId, text) => {
//       if (selectedFolderId && selectedNoteId) {
//         dispatch(updateNote(selectedFolderId, selectedNoteId, text));
//       }
//     }
//   };
// };

const MovieListContainer = connect(mapStateToProps, null)(MovieList);


export default MovieListContainer;
