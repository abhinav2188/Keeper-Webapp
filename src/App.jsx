import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import {DefaultNotesContainer,UserNotesContainer} from './components/notesContainer.jsx';
import Register from './components/register.jsx';
import Login from './components/login.jsx';
import {loginService,registerService} from './components/services/logServices.jsx';
const axios = require('axios');


let customStyle = {

    fontFamily : " 'Quicksand', serif",
}

export function Api(){
    let [api,setApi] = React.useState();
    function callAPI(){
        axios.get('http://localhost:5000/')
        .then(function (response) {
        setApi(response.data);
        console.log(api);
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        console.log('callAPI ')
        });
    }
    return(
        <div>
            <button onClick={callAPI}>Call</button>
            <p>{api}</p>
        </div>
    )
}

export default function App(){
    const [activeTab,setActiveTab] = React.useState('home');
    const [token,setToken] = React.useState(window.sessionStorage.getItem('userId'));
    console.log(token);
    console.log(activeTab);
    return(
    <div className="flex flex-col min-h-screen" style={customStyle}>
        <Header active={activeTab} setActive={setActiveTab}  />

        <div className="flex-grow">
        {
        (activeTab=="home") && (window.sessionStorage.getItem('userId')? 
        <UserNotesContainer   />:
        <DefaultNotesContainer uid="1234"/>) 
        }
        
        {
        activeTab=="register" && 
        <Register onRegister={registerService} active={activeTab} setActive={setActiveTab}  />
        }

        {
        activeTab=="login" && 
        <Login onLogin={loginService} active={activeTab} setActive={setActiveTab}  />
        }
        </div>
        <Footer />
    </div>
    );
}