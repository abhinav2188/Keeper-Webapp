import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import NotesContainer from "./components/notesContainer.jsx";
import Register from './components/Logs/register.jsx';
import Login from './components/Logs/login.jsx';
import ActiveContext from "./context/activeContext";
import AuthContext from "./context/authContext";
import withAlert from "./HOC/withAlert";
import AlertContext from "./context/alertContext";

const axios = require('axios');

let customStyle = {
    fontFamily : " 'Quicksand', serif",
}

const App = () => {
    const [activeTab,setActiveTab] = React.useState('home');
    const [token, setToken] = React.useState(window.sessionStorage.getItem("userId"));
    const alertContext = React.useContext(AlertContext);

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
            alertContext.setAlert({
                show:true,
                msg:"logged in with "+user.email,
                type:"success"
            });          
        })
        .catch(function (error) {
            alertContext.setAlert({
                show:true,
                msg:error.response.data.errorMsg,
                type:"failure"
            });          
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
            alertContext.setAlert({
                show:true,
                msg:response.data.msg,
                type:"success"
            });          
        })
        .catch(function (error) {
            alertContext.setAlert({
                show:true,
                msg:error.response.data.errorMsg,
                type:"failure"
            });          
        });
    }

    return(
        <div className="flex flex-col min-h-screen overflow-x-hidden" style={customStyle}>
        <ActiveContext.Provider value={{active:activeTab , setActive : setActiveTab}}>
        <AuthContext.Provider value={{token:token,setToken:setToken}}>

            <Header/>
            
            {/* <Alert show={showMsg} type="success">{msg}</Alert> */}
            <div className="flex-grow">

            {activeTab==="home" && <NotesContainer /> }
            {activeTab==="register" && <Register onRegister={registerService}/> }
            {activeTab==="login" && <Login onLogin={loginService}/> }

            </div>
        </AuthContext.Provider>
        </ActiveContext.Provider>

        <Footer />
        </div>
        );
}

export default withAlert(App);