import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Input from './components/Input';
import ColorInput from './components/ColorInput';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Input path="/:input"></Input>
        <ColorInput path="/:input/:color/:bgcolor"></ColorInput>
      </Router>
    </div>
  );
}

export default App;
