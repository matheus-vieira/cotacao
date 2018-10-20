import React, { Component } from 'react';

import './NovaCotacao.css';

import { Icon } from 'react-icons-kit';
import { lineChart } from 'react-icons-kit/fa/lineChart';

import Button from '../CustomButton/CustomButton';

import utils from '../../utils/utils';


class Home extends Component {

    id(to = 0, from = 9999) {
        const r = utils.randomNumber(0, 9999);
        return utils.pad(r, 4);
    }


    render() {
        return (
            <header className="NovaCotacao-header">
                <Icon icon={lineChart} />
                <p>Nova cotação</p>
                <small>#{this.id()}</small>
                <img src="https://matheus-vieira.github.io/images/author.png" />
            </header>
    );
    }
}

export default Home;
