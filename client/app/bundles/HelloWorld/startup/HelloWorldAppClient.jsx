import React from 'react';
import { Provider } from 'react-redux';
import routes from '../routes/helloWorldRoutes';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createStore from '../store/helloWorldStore';
import HelloWorld from '../containers/HelloWorld';

// See documentation for https://github.com/rackt/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// This is how the server redux gets hydrated with data.
const HelloWorldAppClient = props => {
  const store = createStore(props);
  const history = createBrowserHistory();

  const reactComponent = (
    <Provider store={store}>
      <Router history={history} children={routes()}/>
    </Provider>
  );
  return reactComponent;
};

export default HelloWorldAppClient;
