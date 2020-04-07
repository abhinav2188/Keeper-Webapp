import React from 'react';
import LogComponent from './Logs/logComponent.jsx';
import Logo from '../assets/logo.svg';
import ActiveContext from '../context/activeContext';

export default function Header(props){
    const activeContext = React.useContext(ActiveContext);
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="py-6 md:px-10 px-2 flex justify-between items-center">
                <button className={`text-2xl text-white flex items-center ${activeContext.active==='home'&& "font-bold"}`} onClick={()=>activeContext.setActive('home')}>
                <img src={Logo} className={`inline mr-3 h-8 ${activeContext.active==='home'? "scale-150" : "scale-100" } transform transition-transform duration-100 ease-out`} alt=""></img>
                <span>Keeper</span>
                </button>
                <LogComponent/>
            </nav>
        </header>
    );
}   