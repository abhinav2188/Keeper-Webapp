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
            {/* <NoteItem title="" content="Proin mattis sagittis euismod. Praesent vel mi nisi. Phasellus volutpat viverra velit, sed consectetur augue euismod sit amet. In a lectus id est gravida convallis sit amet quis lorem. Suspendisse tristique nunc id fringilla pulvinar. Maecenas rhoncus sollicitudin condimentum." onDelete={handleOnDelete}/> */}
                {notesList.map((note,index) => (<NoteItem key={index} id={index} title={note.title} content={note.content} onDelete={handleOnDelete}/>) )}
            </div>
        </div>
    );

}