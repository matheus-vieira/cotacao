import React, { Component } from 'react';

import './NovaCotacao.css';

import Header from './Header'
import Body from './Body'
import Button from '../CustomButton/CustomButton'


class NovaCotacao extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      
  }
  componentDidMount() {
      document.body.classList.add('NovaCotacao-body');
  }

  render() {
    return (
      <div className="NovaCotacao">
        <Header />
        <Body onClick={this.onClick} />
        <Button text="OK" btnClass='App-btn novacotacao-btn'  />
      </div>
    );
  }
}

export default NovaCotacao;
