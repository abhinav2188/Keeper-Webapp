import React,{useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from "../../context/authContext";
import AlertContext from "../../context/alertContext";
import axios from "axios";
import {useHistory} from "react-router-dom";
import ConfirmContext from "../../context/confirmContext";

export default function LoggedIn(props){
    const authContext = React.useContext(AuthContext);
    const alertContext = React.useContext(AlertContext);
    const [isExpanded,setExpanded] = useState(false);
    const confirmContext = React.useContext(ConfirmContext);
    const history = useHistory();

    const confirmLogout = () => {
        confirmContext.setConfirm({
            show:true,
            msg:"Confirm to continue logout",
            onConfirm: () => {logoutService(); confirmContext.setConfirm({show:false}) },
            onCancel : () => {
                confirmContext.setConfirm({
                    show:false
                });
            } 
        });
    }

    function logoutService(){
        const params = new URLSearchParams();
        params.append('id',authContext.token);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/logout',
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function (response) {
            window.sessionStorage.removeItem("userId");
            authContext.setToken(null);
            history.push('/login');
            alertContext.setAlert({
                show:true,
                msg:"logged out",
                type:"info"
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

    function logout(event){
        event.preventDefault();
        confirmLogout();
    }

    return(
        <div className={`flex items-center
        transform ${isExpanded?'translate-x-0':'translate-x-full mr-8'} transition-all duration-500 ease-out`}>
            <img className="md:w-8 md:h-8 h-6 w-6 m-1 rounded-full border border-black hover:w-10 hover:h-10 transition-all duration-100 ease-out"
                 src={props.avatarUrl}
                 alt=""
                 onClick={() => setExpanded(prevState => !prevState)}
            />
            <div className={`flex transform ${isExpanded?'opacity-100':'opacity-0'} transition-all duration-500 ease-out`}>
                    <p className="m-1">{props.name}</p>
                    <button className="m-1" onClick={logout}><ExitToAppIcon /></button> 
            </div>
       </div>
    );
}