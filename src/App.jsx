import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import {DefaultNotesContainer,UserNotesContainer} from './components/notesContainer.jsx';
const axios = require('axios');


let customStyle = {

    fontFamily : " 'Quicksand', serif",
}

export function Api(){
    let [api,setApi] = React.useState();
    function callAPI(){
        axios.get('http://localhost:5000/')
        .then(function (response) {
        setApi(response.data);
        console.log(api);
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        console.log('callAPI ')
        });
    }
    return(
        <div>
            <button onClick={callAPI}>Call</button>
            <p>{api}</p>
        </div>
    )
}

export default function App(){
    return(
    <div className="flex flex-col" style={customStyle}>
        <Header />
        {
            window.sessionStorage.getItem('userId')? 
            <UserNotesContainer />:
            <DefaultNotesContainer />

        }
        <Footer />
    </div>
    );
}