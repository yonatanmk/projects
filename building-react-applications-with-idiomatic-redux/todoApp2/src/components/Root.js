import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
);

export default Root;

/**
 * Manual implementation of Provider
 */
// class Provider extends Component {
//   // react special method to set context on this props to all children
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }
// Provider.childContextTypes = {
//   store: PropTypes.object,
// };
//
