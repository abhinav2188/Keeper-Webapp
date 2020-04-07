import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Notes from "./components/notes.jsx";
import Register from './components/Logs/register.jsx';
import Login from './components/Logs/login.jsx';
import AuthContext from "./context/authContext";
import withAlert from "./HOC/withAlert";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

let customStyle = {
    fontFamily : " 'Quicksand', serif",
}

const App = () => {
    const [token, setToken] = React.useState(window.sessionStorage.getItem("userId"));

    return(
        <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-x-hidden" style={customStyle}>
        <AuthContext.Provider value={{token:token,setToken:setToken}}>
                <Header/>
                <div className="flex-grow">
                <Switch>
                    <Route path="/" exact component={Notes}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
                </div>
        </AuthContext.Provider>

        <Footer />
        </div>
        </BrowserRouter>
        );
}

const WithAlertApp = withAlert(App);

export default WithAlertApp;