import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './NovaCotacao.css';

import { Icon } from 'react-icons-kit';
import { lineChart } from 'react-icons-kit/fa/lineChart';
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO';

import InputMask from 'react-input-mask';

import isValidCnpj from '@brazilian-utils/is-valid-cnpj';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnpj: '',
            iconState: timesCircleO,
            icon: timesCircleO,
            className: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (!isValidCnpj(e.target.value)) return;

        this.setState({ cnpj: e.target.value });
        this.props.handleChange(this.state.cnpj);
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
                            <p className="description">
                                <small>CNPJ/Empresa</small>
                            </p>

                            <div className="input-container">
                                <InputMask onChange={this.handleChange}
                                    mask="99.999.999/9999-99"
                                    maskChar=""
                                    className="NovaCotacao-cnpj"
                                    autoFocus="autofocus" />
                                <Icon icon={this.props.iconState ? checkCircleO : timesCircleO}
                                    className={(this.props.iconState ? 'NovaCotacao-icon-ok' : '') + ' icon'} />
                            </div>
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
