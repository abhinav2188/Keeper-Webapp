import React from 'react';
import Backdrop from "./backdrop";
import Aux from "../../HOC/auxilary";

const confirm = (props) => {
    return(
        <Aux>
        <Backdrop show={props.show} close={props.cancelFunc}/>
        <div className={`fixed z-40 left-1/2 transform -translate-x-1/2
        ${props.show?"top-1/2 -translate-y-1/2 opacity-100":"top-0 -translate-y-full opacity-0"} 
        transition-all duration-500 ease-out
        bg-white rounded-lg border md:w-1/3 w-4/5 md:p-4 p-2 md:text-sm text-xs`}>
            <p className="mt-2 mb-8 mx-1 md:text-base text-sm text-center">{props.msg}</p>
            <center>
            <button className="m-1 md:px-4 px-2 md:py-2 py-1 bg-blue-500 hover:bg-blue-700 rounded-sm" onClick={props.confirmFunc}>Confirm</button>
            <button className="m-1 md:px-4 px-2 md:py-2 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm" onClick={props.cancelFunc}>Cancel</button>
            </center>
        </div>
        </Aux>
    );
}

export default confirm;