import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './components/Home';
import Checklist from './components/Checklist';
import Group from './components/Group';
import Personal from './components/Personal';
import Intro from './components/Intro';
import Members from './components/Members';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route path="*" component={Appbar} />
        <Switch>          
          <Route path="/" component={Home} exact />
          <Route path="/checklist" component={Checklist} exact />
          <Route path="/group" component={Group} exact />
          <Route path="/personal" component={Personal} exact />
          <Route path="/intro" component={Intro} exact />
          <Route path="/members" component={Members} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
