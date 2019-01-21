import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/about">Ir para a página sobre \o/</Link>
      </div>
    );
  }
}

export default App;
