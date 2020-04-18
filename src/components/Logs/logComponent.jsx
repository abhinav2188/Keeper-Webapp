import React from 'react';
import LoggedIn from './loggedIn.jsx';
import AuthContext from "../../context/authContext";
import AlertContext from "../../context/alertContext";
import axios from  "../../axios-instance";
import {Link,useLocation} from "react-router-dom";

export default function LogComponent(){

  const authContext = React.useContext(AuthContext);
  const alertContext = React.useContext(AlertContext);
  const location = useLocation();

  const [userDetails, setUserDetails] = React.useState({
    name : "",
    email : "",
    created : ""
  });

  function getUserDetails(id){
      axios.get('/user',{
          params : {
              id : id
          }
      })
      .then(function (response) {
          setUserDetails(response.data.user);
      })
      .catch(function (error) {
        alertContext.setAlert({
          show:true,
          msg:error.response.data.errorMsg,
          type:"failure"
      });          
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
          <Link exact to="/login" className={`md:mx-2 mx-1 p-1 ${location.pathname==="/login"?"border-b-2 rounded-sm border-white":""} `} >Login</Link>
          <Link exact to="/register" className={`md:mx-2 mx-1 p-1 ${location.pathname==="/register"?"border-b-2 rounded-sm border-white":""}`} >Register</Link>
        </div>
    );
}