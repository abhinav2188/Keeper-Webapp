import React from 'react';
import LogComponent from './logComponent.jsx';



export default function Header(){
    return(
        <header className="bg-yellow-500 shadow-lg font-bold">
            <nav className="mx-8 py-6 px-1 flex justify-between items-center">
                <a href="/" className="text-2xl text-white">Keeper</a>
                <LogComponent />
            </nav>
        </header>
    );
}