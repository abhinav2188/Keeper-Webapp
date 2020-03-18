import React from 'react';
import LoggedIn from './loggedIn.jsx';
import {logoutService} from "./services/logServices.jsx";

export default function LogComponent(props){
    return(
        window.sessionStorage.getItem('userId') ? 
        <LoggedIn name={window.sessionStorage.getItem('userId')} avatarUrl="https://picsum.photos/200" onLogout={logoutService}/> :
        <div className="text-sm text-white">
          <button className={`mx-2 p-1 ${props.active=="login" && "border-b border-white"} `} onClick={()=>props.setActive('login')} >Login</button>
          <button className={`mx-2 p-1 ${props.active=="register" && "border-b border-white"}`} onClick={()=>props.setActive('register')} >Register</button>
        </div>
    );
}