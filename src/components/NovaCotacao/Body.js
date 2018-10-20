import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './NovaCotacao.css';

import { Icon } from 'react-icons-kit';
import { lineChart } from 'react-icons-kit/fa/lineChart';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { cnpj: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.state.cnpj = e.target.value;
        console.log(this.state.cnpj);
    }
    render() {
        return (
            <div>
                <ul className="NovaCotacao-body">
                    <li>
                        <Icon icon={lineChart} />
                        <div>
                            <p className="title">Busca por CNPJ ou empresa</p>
                        </div>
                    </li>
                </ul>
                <ul className="NovaCotacao-body NovaCotacao-body-input">
                    <li>
                        <div></div>
                        <div>
                            <p className="title">
                                <small>CNPJ/Empresa</small>
                            </p>
                            <input required="required"
                                onChange={this.handleChange}
                                pattern="^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$"
                                value={this.state.cnpj} />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

Body.propTypes = {
    cnpj: PropTypes.string
};

Body.defaultProps = {
    cnpj: ''
};

export default Body;
