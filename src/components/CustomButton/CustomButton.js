import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import './CustomButton.css';

import { Icon } from 'react-icons-kit'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(this.props.route);
    }

    render() {
        const { text } = this.props;
        let cssClasses = 'App-btn';
        if (this.btnClass) cssClasses = `${cssClasses} ${this.btnClass}`;
        return (
            <button className={cssClasses} onClick={this.handleClick}>
                {text}
                <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
            </button>
        );
    }
}

CustomButton.propTypes = {
    text: PropTypes.string,
    route: PropTypes.string
};

CustomButton.defaultProps = {
    text: 'Iniciar',
    route: '/',
    btnClass: ''
};

export default withRouter(CustomButton);