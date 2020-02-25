import React from 'react'
import Login from './login.jsx';
import LoggedIn from './loggedIn.jsx';

let islogged = true;
function log(){
    if(islogged){
        return(
            <LoggedIn name="username" avatarUrl="https://picsum.photos/200" />
        );
    }else{
        return (
            <Login />
        );
    }
}

export default function Header(){
    return(
        <header className="bg-yellow-500 shadow-lg font-bold">
            <nav className="mx-8 py-6 px-1 flex justify-between items-center">
                <a href="/" className="text-2xl text-white">Keeper</a>
                <div>
                    {log()}
                </div>
            </nav>
        </header>
    );
}