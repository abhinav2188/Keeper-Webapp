import React,{useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from '../../context/authContext';

export default function LoggedIn(props){
    const authContext = React.useContext(AuthContext);
    const [isExpanded,setExpanded] = useState(false);
    function logout(event){
        event.preventDefault();
        authContext.setToken(null);
        window.sessionStorage.removeItem("userId");
    }
    return(
        <div className={`flex items-center
        transform ${isExpanded?'translate-x-0':'translate-x-full mr-8'} transition-all duration-500 ease-out`}>
            <img className="w-8 h-8 m-1 rounded-full border border-black hover:w-10 hover:h-10 transition-all duration-100 ease-out"
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