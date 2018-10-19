import React, { Component } from 'react';
import './Button.css';
import { Icon } from 'react-icons-kit'
import {longArrowRight} from 'react-icons-kit/fa/longArrowRight'

class CustomButton extends React.Component {
    render() {
        return (
            <button className="App-btn">
                Iniciar
            <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
            </button>
        );
    }
}

export default CustomButton;