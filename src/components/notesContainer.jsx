import React,{useState} from 'react';
import NoteItem from './note.jsx';
import AddNote from './addNote.jsx';


export default function NotesContainer(props){
    const [notesList, setNotesList] = useState([]);
    function handleAddNote(newNote){
        setNotesList(prevList => ([...prevList,newNote]) );
    }
    function handleOnDelete(id){
        console.log('delete',id);
        setNotesList(prevList => ( prevList.filter( (note,index) => (index !== id))) );
    }

    return(
        <div>
            <AddNote onAdd={handleAddNote}/>
            <div className="flex p-6 flex-wrap items-start">
                {notesList.map((note,index) => (<NoteItem key={index} id={index} title={note.title} content={note.content} onDelete={handleOnDelete}/>) )}
            </div>
        </div>
    );

}