import React from 'react';
import './App.css';
import { Home, Dashboard, SignIn } from './pages';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const path = window.location.pathname.split("/")
  const commonClass = path[path.length - 1]
  return (
    <div className={"App " + commonClass}>
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route exact path="/" element={<SignIn />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
