import React from 'react';
import AlertContext from '../../context/alertContext';

const Alert = (props) => {
    const [msg,setMsg] = React.useState();
    return (
        <AlertContext.Provider value={{msg:msg,setMsg:setMsg}}>
        <div className={`px-4 py-2 font-bold text-xs rounded 
        fixed z-50 left-1/2 transform -translate-x-1/2 
        ${props.type==="info" && "bg-blue-400"}
        ${props.type==="warning" && "bg-yellow-400"}
        ${props.type==="success" && "bg-green-400"}
        ${props.type==="failure" && "bg-red-400"}
        ${props.show ? "top-1/10 opacity-100" : "top-0 -translate-y-full opacity-0"} 
        transition-all duration-500 ease-out`}>
            {msg}
            {props.children}
        </div>
        </AlertContext.Provider>
    );

}

export default Alert;