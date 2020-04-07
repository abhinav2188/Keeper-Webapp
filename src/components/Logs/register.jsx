import React from 'react';
import Logo from '../../assets/logo.svg';
import AuthContext from "../../context/authContext";
import AlertContext from "../../context/alertContext";
import {useHistory} from 'react-router-dom';

import axios from "axios";

export default function Register(props){

    const authContext = React.useContext(AuthContext);
    const alertContext = React.useContext(AlertContext);
    const history = useHistory();

    let [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
        confirmPassword:"",
    });
    let [displayHint,setDisplayHint] = React.useState([]);

    function registerService(){
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
            authContext.setToken(uid);
            history.push('/');
            alertContext.setAlert({
                show:true,
                msg:"user registered",
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

    function validateUsername(value){
        let err=[];
        let usernameExp = /[a-zA-Z0-9]+/;
        if(!value)
        err.push("username is a required field");
        if(!usernameExp.test(value))
        err.push('username should contain only alpha numeric characters');
        return err;
    }
    function validateEmail(value){
        let err=[];
        let emailExp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        if(!value)
        err.push("email is a required field");
        if(!emailExp.test(value))
        err.push('email should contain "@" and "."');
        return err;
    }
    function validatePassword(value){
        let err = [];
        if(!value)
        err.push("password is a required field");
        if(!/\d/.test(value))
        err.push("password should contain atleast one digit");
        if(!/[A-Z]/.test(value))
        err.push("password should contain atleast one capital letter");
        if(! /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
        err.push("password should contain atleast one special character");
        if(value.length<8)
        err.push("password should be of atleast 8 characters");
        return err;
    }
    function validateConfirmPassword(value){
        let err=[];
        if(!value)
        err.push("confirm password is a required field");
        if(value != user.password)
        err.push('confirm password should be same as password');
        return err;
    }
    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        setUser( prevState => ({ ...prevState, [name] : value }));
        let verifyFunction = "validate"+name.substr(0,1).toUpperCase()+name.substr(1);
        setDisplayHint(eval(verifyFunction)(event.target.value));
    }
    function handleSubmit(event){
        event.preventDefault();
        if(validateEmail(user.email).length>0||validateUsername(user.username).length>0||validatePassword(user.password).length>0||validateConfirmPassword(user.confirmPassword).length>0){
            alertContext.setAlert({
                msg:'Error in the filled values',
                show:true,
                type:"failure"
            });
        }else
        registerService();
    }

    return(
        <div className="my-8 flex md:flex-row flex-col md:w-2/3 mx-auto items-center">
        <div className="md:w-1/2 flex flex-col items-center md:px-16 px-2 md:my-0 my-6">
            <img src={Logo} className="mx-auto h-24" alt=""></img>
            <h1 className="text-4xl my-4">Keeper</h1>
            <p className="text-center ">Keeper is an simple, secure, online notes keeping app.
            Keep your notes online, reach out to them anytime.</p>
        </div>
        <div className="md:w-1/2 w-full px-2 md:px-0">
            <h1 className="text-center text-2xl my-4">Sign up to Keeper</h1>
            <form className="flex flex-col max-w-sm mx-auto border shadow-lg rounded-lg p-6 my-4 text-sm bg-white" onSubmit={handleSubmit}>

                <label for="email" className="mb-1 required">Email address</label>
                <input className="border rounded-sm p-1 mb-4" type="email" name="email" value={user.email} 
                onChange={handleChange}/>
                
                <label for="username" className="mb-1 required">Username</label>
                <input className="border rounded-sm p-1 mb-4" type="text"name="username" value={user.username} 
                onChange={handleChange}/>
                
                <label for="password" className="mb-1 required">Password</label>
                <input className="border p-1 rounded-sm mb-4" type="password" name="password" value={user.password} 
                onChange={handleChange}/>

                <label className="mb-1 required">Confirm password</label>
                <input className="border rounded-sm p-1 mb-4" type="password" name="confirmPassword" value={user.confirmPassword} 
                onChange={handleChange}/>
                
                {displayHint.map( hint => <p className="text-red-600 font-bold text-xs px-2">{hint}</p>)}

                <button className="mt-4 p-1 text-white border border-gray-600 bg-green-500 hover:shadow-md hover:bg-green-600 rounded-sm" type="submit" 
                onClick={handleSubmit}>Create Account</button>
            </form>
            <div className="max-w-sm mx-auto p-3 border border-gray-400 text-sm text-center my-4 rounded-lg">
                <p>Already have account? 
                    <button onClick={()=>history.push('/login')} className="text-blue-500 hover:text-blue-600 hover:underline">Login here</button>
                </p>
            </div>

        </div>
        </div>
    );
}
