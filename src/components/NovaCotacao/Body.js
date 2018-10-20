import React, { Component } from 'react';

import '../../App.css';

import { Icon } from 'react-icons-kit';
import { lineChart } from 'react-icons-kit/fa/lineChart';


class NovaCotacao extends Component {
    componentDidMount() {
        document.body.classList.add('NovaCotacao-body');
    }

    render() {
        return (
            <ul className="NovaCotacao-body">
                <li>
                    <Icon icon={lineChart} />
                    <div>
                        <p className="title">Busca por CNPJ ou empresa</p>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <input />
                    </div>
                </li>
            </ul>
        );
    }
}

export default NovaCotacao;
