import React, { Component } from 'react';

import '../../App.css';

import { Icon } from 'react-icons-kit'

import {lineChart} from 'react-icons-kit/fa/lineChart'
import Button from '../CustomButton/CustomButton'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon icon={lineChart} />
          <p>Cotação de seguros</p>
          <small>Solução inovadora da líder de mercado</small>
          <Button text="OK"  />
        </header>
      </div>
    );
  }
}

export default Home;
