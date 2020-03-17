import React,{useState} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function LoggedIn(props){
    const [isExpanded,setExpanded] = useState(false);
    function logout(event){
        event.preventDefault();
        console.log('logout');
        let uid = window.sessionStorage.getItem('userId');
        props.onLogout(uid);
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