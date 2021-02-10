import React, { useState } from 'react';

import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--transition'];

const SIZES = ['btn--medium', 'btn--large','btn--circle'];

export const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]
    
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0]
    
    return(
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}    
        >
            {children}
        </button>
    )
}

export default Button;