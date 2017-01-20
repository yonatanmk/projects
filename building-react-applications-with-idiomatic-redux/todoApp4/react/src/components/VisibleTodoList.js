import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import TodoList from './TodoList';
import FetchError from './FetchError';

import * as actions from '../actionCreators';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';

class VisibleTodoList extends Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log('done!')); //fetchTodos returns a promise so we can use this to console.log done messages, results, etc
  }

  render() {
    const { toggleTodo, todos, isFetching, errorMessage} = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        < FetchError
          message = {errorMessage}
          onRetry = {()=>this.fetchData()}
        />
      );
    }
    return (
      <TodoList
        todos = {todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}

// maps redux store state to components
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

// maps redux store dispatch to list of components
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };
// ^^ uneeded b/c of syntax below, use only when params of prop function == params of action creator

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

/**
 * Manual implementation to subscribe, unsubscribe, dispatching to redux store,
 * and using store context.
 * contrasted to using connect in react-redux library as shown above
 */
// class VisibleTodoList extends Component {
//   componentDidMount() {
//     const {store} = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const props = this.props;
//     const {store} = this.context;
//     const state = store.getState();
//
//     return (
//       <TodoList
//         todos={
//           getVisibleTodos(
//             state.todos,
//             state.visibilityFilter,
//           )
//         }
//         onTodoClick={id =>
//           store.dispatch({
//             type: 'TOGGLE_TODO',
//             id,
//           })
//         }
//       />
//     );
//   }
// }
// VisibleTodoList.contextTypes = {
//   store: React.PropTypes.object,
// };

export default VisibleTodoList;
