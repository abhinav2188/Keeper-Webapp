import React,{useState} from 'react';
import NoteItem from './note.jsx';
import AddNote from './addNote.jsx';
import notesdata from '../notes.js';


export default function NotesContainer(props){
    const [notesList, setNotesList] = useState([]);
    function handleAddNote(newNote){
        setNotesList(prevList => ([...prevList,newNote]) );
    }

    return(
        <div>
            <AddNote onAdd={handleAddNote}/>
            <div className="flex p-8 flex-wrap items-start">
                {notesList.map((note,index) => (<NoteItem key={index} title={note.title} content={note.content} />) )}
                {notesdata.map(note => (<NoteItem key={note.id} title={note.title} content={note.content} />) )}
            </div>
        </div>
    );

}