import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/elements/ErrorBoundary';
import { Main,Welcome,Second,User,UserDetail } from './pages';

const App = ({ store }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} exact path="/" />
            <Route element={<Welcome />} exact path="/Welcome" />
            <Route element={<Second />} exact path="/Second" />
            <Route element={<User />} path="/User" >
              <Route element={<UserDetail />} path=":userId"  />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default hot(App);

App.propTypes = {
  store: PropTypes.object.isRequired,
};
