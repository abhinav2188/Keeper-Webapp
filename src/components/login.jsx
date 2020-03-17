import React from 'react';

export default function Login(props){
    let [user, setUser] = React.useState({
        email:"",
        password:""
    });
    function handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        setUser( prevState => ({ ...prevState, [name] : value }));
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log('login');
        props.onLogin(user);
    }
    return(
        <div>
            <form className="flex" onSubmit={handleSubmit}>
                <input className="mx-1 p-1" type="email" placeholder="enter email" name="email" value={user.email} onChange={handleChange}/>
                <input className="mx-1 p-1 " type="password" placeholder="enter password" name="password" value={user.password} onChange={handleChange}/>
                <button className="mx-2 p-1 border-white hover:text-white" type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

