import React, { Component } from 'react';
import './CustomButton.css';
import { Icon } from 'react-icons-kit'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import { Redirect } from 'react-router';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text || "Iniciar";
        this.route = props.route || "/";
        this.state = {redirect: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) 
            return <Redirect push to={this.route} />;

        return (
            <button className="App-btn" onClick={this.handleClick}>
                {this.text}
                <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
            </button>
        );
    }
}

export default CustomButton;