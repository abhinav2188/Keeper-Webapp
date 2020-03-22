import React from 'react';
import LoggedIn from './loggedIn.jsx';
import {logoutService} from "./services/logServices.jsx";
import ActiveContext from "../context/activeContext";
import AuthContext from "../context/authContext";

export default function LogComponent(){
  const activeContext = React.useContext(ActiveContext);
  const authContext = React.useContext(AuthContext);
  return(
        authContext.token ? 
        <LoggedIn name={authContext.token} avatarUrl="https://picsum.photos/200"/> :
        <div className="text-sm text-white">

          <button className={`mx-2 p-1 ${activeContext.active=="login" && "border-b border-white"} `} onClick={()=>activeContext.setActive('login')} >Login</button>
          <button className={`mx-2 p-1 ${activeContext.active=="register" && "border-b border-white"}`} onClick={()=>activeContext.setActive('register')}>Register</button>
        </div>
    );
}