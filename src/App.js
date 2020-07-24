import React from 'react';
import './App.css';
import { Home, Dashboard, SignIn } from './pages';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  const path = window.location.pathname.split("/")
  const commonClass = path[path.length - 1]
  return (
    <div className={"App " + commonClass}>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </HashRouter >
    </div>
  );
}

export default App;
