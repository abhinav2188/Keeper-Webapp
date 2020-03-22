import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
// import {DefaultNotesContainer,UserNotesContainer} from './components/notesContainer.jsx';
import NotesContainer from "./components/notesContainer.jsx";
import Register from './components/register.jsx';
import Login from './components/login.jsx';
// import {loginService,registerService} from './components/services/logServices';
import ActiveContext from "./context/activeContext";
import AuthContext from "./context/authContext";

const axios = require('axios');

let customStyle = {
    fontFamily : " 'Quicksand', serif",
}

export default function App(){
    const [activeTab,setActiveTab] = React.useState('home');
    const [token, setToken] = React.useState(window.sessionStorage.getItem("userId"));
    console.log("window",window.sessionStorage.getItem("userId"));
    console.log("token",token);
 
    function loginService(user){
        const params = new URLSearchParams();
        params.append('email',user.email);
        params.append('password',user.password);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/login',
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function (response) {
            let uid = response.data.userId;
            window.sessionStorage.setItem('userId',uid);
            setToken(uid);
            setActiveTab('home');
            alert(response.data.msg);
        })
        .catch(function (error) {
            alert(error.response.data.errorMsg);
        });
    }
    
    function registerService(user){
        const params = new URLSearchParams();
        params.append('email',user.email);
        params.append('username',user.username);    
        params.append('password',user.password);
    
        axios({
            method: 'POST',
            url: 'http://localhost:5000/register',
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function (response) {
            let uid = response.data.userId;
            window.sessionStorage.setItem('userId',uid);
            setToken(uid);
            setActiveTab('home');
            alert(response.data.msg);
        })
        .catch(function (error) {
            alert(error.response.data.errorMsg);
        });
    }

    return(
        <div className="flex flex-col min-h-screen" style={customStyle}>
        <ActiveContext.Provider value={{active:activeTab , setActive : setActiveTab}}>
        <AuthContext.Provider value={{token:token,setToken:setToken}}  >  
            <Header/>
            
            <div className="flex-grow">

            {activeTab=="home" && <NotesContainer /> }
            {activeTab=="register" && <Register onRegister={registerService}/> }
            {activeTab=="login" && <Login onLogin={loginService}/> }

            </div>
        </AuthContext.Provider>
        </ActiveContext.Provider>

        <Footer />
        </div>
        );
}
