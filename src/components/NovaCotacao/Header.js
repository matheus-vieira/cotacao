import React, { Component } from 'react';

import './NovaCotacao.css';

import { Icon } from 'react-icons-kit';
import { lineChart } from 'react-icons-kit/fa/lineChart';

import utils from '../../utils/utils';


class Header extends Component {

    id(to = 0, from = 9999) {
        const r = utils.randomNumber(0, 9999);
        return utils.pad(r, 4);
    }


    render() {
        return (
            <header className="NovaCotacao-header">
            <ul>
              <li>
                <Icon icon={lineChart} />
                <div>
                    <p>Nova cotação</p>
                    <small>#{this.id()}</small>
                </div>
                <img src="https://matheus-vieira.github.io/images/author.png" alt="user" />
              </li>
            </ul>
          </header>
        );
    }
}

export default Header;
