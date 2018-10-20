import React, { Component } from 'react';

import '../../App.css';

import { Icon } from 'react-icons-kit'

import Header from './Header'
import Button from '../CustomButton/CustomButton'


class Home extends Component {
  render() {
    return (
      <div className="NovaCotacao">
        <Header />
        <Button text="OK" btnClass='novacotacao-btn'  />
      </div>
    );
  }
}

export default Home;
