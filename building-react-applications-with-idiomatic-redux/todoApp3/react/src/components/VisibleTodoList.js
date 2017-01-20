import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import TodoList from './TodoList';

import toggleTodo from '../actionCreators/toggleTodo';
import { getVisibleTodos } from '../reducers';

// maps redux store state to components
const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

// maps redux store dispatch to list of components
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };
// ^^ uneeded b/c of syntax below, use only when params of prop function == params of action creator

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo}
)(TodoList));

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
