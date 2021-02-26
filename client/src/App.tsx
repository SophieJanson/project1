import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, RouteComponentProps, Router, Switch } from 'react-router';
import DiePage from './pages/DiePage';

function App() {
  return (
    <div className="App">
      <DiePage />
    </div>
  );
}

export default App;
