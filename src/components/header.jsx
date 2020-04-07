import React from 'react';
import LogComponent from './Logs/logComponent.jsx';
import Logo from '../assets/logo.svg';
import {NavLink,useLocation,withRouter} from "react-router-dom";

const Header = (props)=>{
    const location = useLocation();
    return(
        <header className="bg-yellow-500 shadow-lg">
            <nav className="py-6 md:px-10 px-2 flex justify-between items-center">
                <NavLink exact to="/" className={`text-2xl text-white flex items-center`} activeClassName="font-bold">
                <img src={Logo} className={`inline mr-3 h-8 ${location.pathname==="/" ? "scale-150" : "scale-100" } transform transition-transform duration-100 ease-out`} alt=""></img>
                <span>Keeper</span>
                </NavLink>
                <LogComponent/>
            </nav>
        </header>
    );
}   

export default withRouter(Header);