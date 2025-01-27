import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Импортируйте Provider
import store from './redux/store'; // Импортируйте Ваше хранилище
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Оберните приложение в Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
