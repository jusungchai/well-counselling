import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {  
  return (
    <React.Fragment>
      <Appbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route>
            404 Error
        </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
