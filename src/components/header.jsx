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