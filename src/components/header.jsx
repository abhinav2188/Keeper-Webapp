import React from 'react'
import Login from './login.jsx';

let islogged = true;
function log(){
    if(islogged){
        return(
            <p>User@email.com</p>
        );
    }else{
        return (
            <Login />
        );
    }
}

export default function Header(){
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="w-4/5 mx-auto py-8 flex justify-between items-center">
                <a href="/" className="text-2xl text-white">Keeper</a>
                <div>
                    {log()}
                </div>
            </nav>
        </header>
    );
}