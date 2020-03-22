import React,{useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from '../context/authContext';

export default function LoggedIn(props){
    const authContext = React.useContext(AuthContext);
    const [isExpanded,setExpanded] = useState(false);
    function logout(event){
        event.preventDefault();
        authContext.setToken(null);
        window.sessionStorage.removeItem("userId");
    }
    return(
        <div className="flex items-center">
            <img className="w-8 h-8 m-1 rounded-full border border-black"
                 src={props.avatarUrl}
                 alt=""
                 onClick={() => setExpanded(prevState => !prevState)}
            />
            {isExpanded && <div className="flex">
                    <p className="m-1">{props.name}</p>
                    <a className="m-1" onClick={logout}><ExitToAppIcon /></a> 
                </div>
            }
       </div>
    );
}