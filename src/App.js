import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AuthorImagePage from './Pages/AuthorImagePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={AuthorImagePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
