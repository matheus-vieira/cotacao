import React, { Component } from 'react';

import './NovaCotacao.css';

import Header from './Header';
import Body from './Body';
import Button from '../CustomButton/CustomButton';

import isValidCnpj from '@brazilian-utils/is-valid-cnpj';

const url = '//localhost:3001/quote/'


class NovaCotacao extends Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(cnpj) {
    let isValid = isValidCnpj(cnpj);

    if (isValid) {
      cnpj = cnpj.replace(/\D/g, '');
      let reqUrl = `${url}${cnpj}`;
      reqUrl = encodeURI(reqUrl);
      fetch(reqUrl, {
        headers: { "ACCESS-TOKEN": "12345" }
      }).then(res => this.handleRequest(res));
    }
  }

  handleRequest(res) {
    this.setState({ enabled: res.ok });
  }

  componentDidMount() {
    document.body.classList.add('NovaCotacao-body');
  }

  render() {
    return (
      <div className="NovaCotacao">
        <Header />
        <Body handleChange={this.handleChange} iconState={this.state.enabled} />
        <Button text="OK" btnClass='App-btn novacotacao-btn' enabled={this.state.enabled} />
      </div>
    );
  }
}

export default NovaCotacao;
