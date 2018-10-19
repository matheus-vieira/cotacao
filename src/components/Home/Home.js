/**
 * 
          <Icon icon={lineChart} />
          <p>Cotação de seguros</p>
          <small>Solução inovadora da líder de mercado</small>
 */

import React, { Component } from 'react';

import './App.css';

import { Icon } from 'react-icons-kit'

import {lineChart} from 'react-icons-kit/fa/lineChart'
import {Button} from 'react-icons-kit/fa/longArrowRight'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon icon={lineChart} />
          <p>Cotação de seguros</p>
          <small>Solução inovadora da líder de mercado</small>
          <button className="App-btn">
            Iniciar
            <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
          </button>
        </header>
      </div>
    );
  }
}

export default App;
