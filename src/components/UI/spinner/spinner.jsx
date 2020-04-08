import React from 'react';
import "./spinner.css";

const spinner = (props) => {
    return (
        <div className={`w-6 h-6 border-4 rounded-full shadow-sm spin
        fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        ${props.show?"":"hidden"}
        ` } style={{borderTopColor:"#1121ee"}}></div>
    );
}

export default spinner;