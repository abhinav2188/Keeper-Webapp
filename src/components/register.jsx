import React from 'react';

export default function Register(props){
    let [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
        confirmPassword:"",
    });
    let [displayHint,setDisplayHint] = React.useState([]);
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
        if(!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
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
            alert('Error in the filled values');
        }else
        props.onRegister(user);
    }

    return(
        <div className="mt-8">
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
                    <button onClick={()=>props.setActive('login')} className="text-blue-500 hover:text-blue-600 hover:underline">Login here</button>
                </p>
            </div>
        </div>
    );
}
        {/* <div>
            <form className="flex flex-col w-1/4 mx-auto border shadow-lg rounded-lg p-6 mt-12" onSubmit={handleSubmit}>
                <input className="px-2 py-3 border-b rounded-t" type="email" placeholder="enter email" name="email" value={user.email} 
                onChange={handleChange}/>
                <input className="px-2 py-3 border-b" type="text" placeholder="enter username" name="username" value={user.username} 
                onChange={handleChange}/>
                <input className="px-2 py-3 border-b" type="password" placeholder="enter password" name="password" value={user.password} 
                onChange={handleChange}/>
                <input className="px-2 py-3 border-b rounded-b" type="password" placeholder="confirm password" name="confirmPassword" value={user.confirmPassword} 
                onChange={handleChange}/>
                {displayHint.map( hint => <p className="text-red-600 font-bold text-xs px-2">{hint}</p>)}
                <button className="mt-4 p-1 w-32 border border-white hover:text-white self-center rounded" type="submit" 
                onClick={handleSubmit}>Register</button>
            </form>
        </div> */}
