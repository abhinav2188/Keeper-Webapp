import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import NotesContainer from './components/notesContainer.jsx';


let customStyle = {
    fontFamily : " 'Lacquer', serif",
}

export default function App(){
    return(
    <div className="flex flex-col" style={customStyle}>
        <Header />
        <NotesContainer />
        <Footer />
    </div>
    );
}