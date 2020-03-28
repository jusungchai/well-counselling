import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './components/Home';
import Checklist from './components/Checklist';
import Group from './components/Group';


function App() {
  return (
    <React.Fragment>
      <Appbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/checklist" component={Checklist} exact />
          <Route path="/group" component={Group} exact />
          <Route>
            404 Error
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
