import React from 'react';
import LoggedIn from './loggedIn.jsx';
import {logoutService} from "./services/logServices.jsx";
import ActiveContext from "../context/activeContext";

export default function LogComponent(){
  const activeContext = React.useContext(ActiveContext);
  return(
        window.sessionStorage.getItem('userId') ? 
        <LoggedIn name={window.sessionStorage.getItem('userId')} avatarUrl="https://picsum.photos/200" onLogout={logoutService}/> :
        <div className="text-sm text-white">

          <button className={`mx-2 p-1 ${activeContext.active=="login" && "border-b border-white"} `} onClick={()=>activeContext.setActive('login')} >Login</button>
          <button className={`mx-2 p-1 ${activeContext.active=="register" && "border-b border-white"}`} onClick={()=>activeContext.setActive('register')}>Register</button>
        </div>
    );
}