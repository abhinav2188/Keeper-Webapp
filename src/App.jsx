import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Note from './components/note.jsx';

let customStyle = {
    fontFamily : " 'Lacquer', serif",
}
export default function App(){
    return(
    <div className="flex flex-col" style={customStyle}>
        <Header />
        <div className="flex p-8 justify-around flex-wrap">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        </div>
        <Footer />
    </div>
    );
}