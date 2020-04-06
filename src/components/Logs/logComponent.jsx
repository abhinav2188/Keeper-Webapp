import React from 'react';
import LoggedIn from './loggedIn.jsx';
import ActiveContext from "../../context/activeContext";
import AuthContext from "../../context/authContext";
import axios from 'axios';

export default function LogComponent(){

  const activeContext = React.useContext(ActiveContext);
  const authContext = React.useContext(AuthContext);
  const [userDetails, setUserDetails] = React.useState({
    name : "",
    email : "",
    created : ""
  });

  function getUserDetails(id){
      console.log("getUserDetails()"+id);
      axios.get('http://localhost:5000/user',{
          params : {
              id : id
          }
      })
      .then(function (response) {
          console.log(response.data.user);
          setUserDetails(response.data.user);
      })
      .catch(function (error) {
          console.log(error.response.data.errorMsg);
      });
  }

  React.useEffect(()=>{
    if(authContext.token)
    getUserDetails(authContext.token);
    else
    setUserDetails(null);
  },[authContext.token])

  return(
        userDetails ? 
        <LoggedIn name={userDetails.username} avatarUrl="https://picsum.photos/200"/> :
        <div className="text-sm text-white">
          <button className={`mx-2 p-1 ${activeContext.active==="login" && "border-b border-white"} `} onClick={()=>activeContext.setActive('login')} >Login</button>
          <button className={`mx-2 p-1 ${activeContext.active==="register" && "border-b border-white"}`} onClick={()=>activeContext.setActive('register')}>Register</button>
        </div>
    );
}