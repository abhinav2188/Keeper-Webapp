import React from 'react';
import LogComponent from './logComponent.jsx';



export default function Header(props){
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="mx-8 py-6 px-1 flex justify-between items-center">
                <button className={`text-2xl font-bold ${props.active=='home'&& "text-red-500"}`} onClick={()=>props.setActive("home")}>Keeper</button>
                <LogComponent active={props.active} setActive={props.setActive} />
            </nav>
        </header>
    );
}   