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
        <div className="mt-8">
            <h1 className="text-center text-2xl my-4">Login to Keeper</h1>
            <form className="flex flex-col max-w-sm mx-auto border shadow-lg rounded-lg p-6 my-4 text-sm bg-white" onSubmit={handleSubmit}>
                <label for="email" className="mb-1 required">Email address</label>
                <input className="border rounded-sm p-1 mb-4" type="email" name="email" value={user.email} 
                onChange={handleChange}/>
                <label for="password" className="mb-1 required">Password</label>
                <input className="border p-1 rounded-sm mb-4" type="password" name="password" value={user.password} 
                onChange={handleChange}/>
                <button className="mt-4 p-1 text-white border border-gray-600 bg-green-500 hover:shadow-md hover:bg-green-600 rounded-sm" type="submit" 
                onClick={handleSubmit}>Login</button>
            </form>
            <div className="max-w-sm mx-auto p-3 border border-gray-400 text-sm text-center my-4 rounded-lg">
                <p>New to Keeper? 
                    <button onClick={()=>props.setActive('register')} className="text-blue-500 hover:text-blue-600 hover:underline">Create Account here</button>
                </p>
            </div>
        </div>
    );
}

