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
            <form className="flex flex-col w-1/4 mx-auto border shadow-lg rounded-lg p-6 mt-12" onSubmit={handleSubmit}>
                <input className="px-2 py-3 border-b rounded-t" type="email" placeholder="enter email" name="email" value={user.email} 
                onChange={handleChange}/>
                <input className="px-2 py-3 border-b" type="password" placeholder="enter password" name="password" value={user.password} 
                onChange={handleChange}/>
                <button className="mt-4 p-1 w-32 border border-white hover:text-white self-center rounded" type="submit" 
                onClick={handleSubmit}>Login</button>
            
            </form>
        </div>
    );
}

