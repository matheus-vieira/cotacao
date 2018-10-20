import React, { Component } from 'react';
import './CustomButton.css';
import { Icon } from 'react-icons-kit'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';
import { withRouter } from 'react-router-dom';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text || "Iniciar";
        this.route = props.route || "/";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(this.route);
    }

    render() {
        return (
            <button className="App-btn" onClick={this.handleClick}>
                {this.text}
                <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
            </button>
        );
    }
}

export default withRouter(CustomButton);