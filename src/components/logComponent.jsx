import React from 'react'
import Login from './login.jsx';
import LoggedIn from './loggedIn.jsx';

export default function LogComponent(){
    let isLogged = true;
    return(
        isLogged ? 
        <LoggedIn name="username" avatarUrl="https://picsum.photos/200" /> :
        <Login />
    );
}