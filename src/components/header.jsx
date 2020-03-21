import React from 'react';
import LogComponent from './logComponent.jsx';
import Logo from '../assets/logo.svg';


export default function Header(props){
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="mx-8 py-6 px-1 flex justify-between items-center">
                <button className={`text-2xl text-white flex items-center ${props.active=='home'&& "font-bold"}`} onClick={()=>props.setActive("home")}>
                <img src={Logo} className={`inline mr-2 ${props.active=='home'? "h-10" : "h-8" }`}></img>
                <span>Keeper</span>
                </button>
                <LogComponent active={props.active} setActive={props.setActive} />
            </nav>
        </header>
    );
}   