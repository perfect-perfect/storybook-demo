import React from 'react';
import './Input.css'

function Input(props) {
    const { size, ...rest } = props;

    return (
        <input className={`input ${size}`} {...rest}>

        </input>
    )
};

export default Input;