import React from 'react';

export default function Login(){
    return(
        <div>
            <form className="flex" action="/login" method="post">
                <input className="mx-1 p-1" type="text" placeholder="enter your email"/>
                <input className="mx-1 p-1 " type="password" placeholder="enter password"/>
                <button className="mx-2 p-1 border-white hover:text-white" type="submit">Login</button>
            </form>
        </div>
    );
}