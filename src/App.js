import React from 'react';
import { Provider } from 'react-redux';
import MyRouter from './router';
import configureStore from './config/store';
import rootSaga from './sagas';

const App = () => {
  const store = configureStore(window.__INITIAL_STATE__);
  store.runSaga(rootSaga);

  return (
    <Provider store={store}>
      <MyRouter />
    </Provider>
  );
};

export default App;
