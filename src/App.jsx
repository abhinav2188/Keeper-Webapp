import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import {DefaultNotesContainer,UserNotesContainer} from './components/notesContainer.jsx';
import Register from './components/register.jsx';
import Login from './components/login.jsx';
import {loginService,registerService} from './components/services/logServices';
import ActiveContext from "./context/activeContext";


let customStyle = {
    fontFamily : " 'Quicksand', serif",
}

export default function App(){
    const [activeTab,setActiveTab] = React.useState('login');

    return(
        <div className="flex flex-col min-h-screen" style={customStyle}>
        <ActiveContext.Provider value={{active:activeTab , setActive : setActiveTab}}>
             
            <Header/>
            
            <div className="flex-grow">
            {(activeTab=="home") && (window.sessionStorage.getItem('userId')? 
            <UserNotesContainer   />:
            <DefaultNotesContainer uid="1234"/>)}
            {activeTab=="register" && <Register onRegister={registerService}/> }
            {activeTab=="login" && <Login onLogin={loginService}/> }
            </div>

        </ActiveContext.Provider>

        <Footer />
        </div>
        );
}
