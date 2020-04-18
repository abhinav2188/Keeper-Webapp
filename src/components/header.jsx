import React from 'react';
import LogComponent from './Logs/logComponent.jsx';
import Logo from '../assets/logo.svg';
import {NavLink,useLocation,withRouter} from "react-router-dom";

const Header = (props)=>{
    const location = useLocation();
    return(
        <header className="bg-yellow-500 shadow-lg md:text-base text-sm">
            <nav className="py-6 md:px-10 px-6 flex justify-between items-center">
                <NavLink exact to="/" className={`md:text-2xl text-lg text-white flex items-center appearance-none`} activeClassName="font-bold">
                <img src={Logo} className={`inline mx-1 md:h-10 h-8 ${location.pathname==="/" ? "scale-125" : "scale-100" } transform transition-transform duration-100 ease-out`} alt=""></img>
                <span className="mx-1">Keeper</span>
                </NavLink>
                <LogComponent/>
            </nav>
        </header>
    );
}   

export default withRouter(Header);