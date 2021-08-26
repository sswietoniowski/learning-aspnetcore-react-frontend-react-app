import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './Header';
import { HomePage } from './HomePage';

function App() {
  return (
    <div className="container">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
