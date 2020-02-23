import React from 'react'

export default function Header(){
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="w-4/5 mx-auto py-8">
                <a href="/" className="text-2xl text-white"><strong>Keeper</strong></a>
            </nav>
        </header>
    );
}