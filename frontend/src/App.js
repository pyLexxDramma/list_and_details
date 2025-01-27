import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from './redux/rootReducer';
import ServiceList from './components/ServiceList';
import ServiceDetails from './components/ServiceDetails';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={ServiceList} />
          <Route path="/:id/details" component={ServiceDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
