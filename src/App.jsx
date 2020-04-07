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

    return(
        <div className="flex flex-col min-h-screen overflow-x-hidden" style={customStyle}>
        <ActiveContext.Provider value={{active:activeTab , setActive : setActiveTab}}>
        <AuthContext.Provider value={{token:token,setToken:setToken}}>

            <Header/>
            
            {/* <Alert show={showMsg} type="success">{msg}</Alert> */}
            <div className="flex-grow">

            {activeTab==="home" && <NotesContainer /> }
            {activeTab==="register" && <Register/> }
            {activeTab==="login" && <Login/> }

            </div>
        </AuthContext.Provider>
        </ActiveContext.Provider>

        <Footer />
        </div>
        );
}

export default withAlert(App);