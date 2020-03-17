import React from 'react'
import Login from './login.jsx';
import LoggedIn from './loggedIn.jsx';
import axios from 'axios';

export default function LogComponent(){

    const [uid,setlogUser] = React.useState({
        id:"",
        username:""
    });
    const [isLogged,setIsLogged] = React.useState(false);

    function logoutService(uid){
      console.log('logoutService');
      window.sessionStorage.removeItem('userId');
    }
    function loginService(user){
        const params = new URLSearchParams();
        params.append('email',user.email);
        params.append('password',user.password);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/login',
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .then(function (response) {
            let uid = response.data.userId;
            window.sessionStorage.setItem('userId',uid);
            setIsLogged(true);
          })
          .catch(function (error) {
            alert(error.response.data.errorMsg);
          });
    }

    return(
        window.sessionStorage.getItem('userId') ? 
        <LoggedIn name={window.sessionStorage.getItem('userId')} avatarUrl="https://picsum.photos/200" onLogout={logoutService}/> :
        <Login onLogin={loginService}/> 
    );
}