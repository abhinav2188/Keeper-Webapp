import React,{useState,useEffect} from 'react';
import NoteItem from './note.jsx';
import AddNote from './addNote.jsx';
import AuthContext from '../context/authContext';

const axios = require('axios');

let notesConainterStyle = {
        columnCount: 4,
        columnGap: "1rem",
        columnFill : "balanced",
        columnSpan: "all"
}

export default function NotesContainer(){
    const [notesList, setNotesList] = useState([]);
    const authContext = React.useContext(AuthContext);

    function fetchNotes(){
        axios.get('http://localhost:5000/notes',{
            params : {
                id : authContext.token
            }
        }).then( (response) => {
            setNotesList(response.data.notes);
        }).catch( (error) => {
            alert(error.response.data.errorMsg);
        });
    }

    useEffect( ()=> {
        if(authContext.token){
        fetchNotes();
        }else
        setNotesList([]);
    },[authContext.token]);

    function handleAddNote(newNote){
        setNotesList(prevList => ([...prevList,newNote]) );
        if(authContext.token){
            let noteData = new URLSearchParams();
            noteData.append('content',newNote.content);
            noteData.append('title',newNote.title);
            axios({
                method:'POST',
                url : 'http://localhost:5000/addnote',
                params : {
                    id: authContext.token
                },
                data : noteData
            }).then( (response) => {
                alert(response.data.msg);
            }).catch( (error) => {
                alert(error.response.data.errorMsg);
            });
    
        }
    }
    function handleOnDelete(id){
        console.log('delete',id);
        setNotesList(prevList => ( prevList.filter( (note,index) => (index !== id))) );
        if(authContext.token){
            setNotesList(prevList => ( prevList.filter( note => (note._id !== id))) );
            axios.delete('http://localhost:5000/deleteNote',{
                params : {
                    userId : authContext.token,
                    noteId : id
                }
            }).then( (response) => {
                alert(response.data.msg);
            }).catch( (error) => {
                alert(error.response.data.errorMsg);
            });
        }

    }
    const notesRef =[];
    return(
        <div className="my-8">
            <AddNote onAdd={handleAddNote}/>
            <div className="my-8 p-4 w-full ">
                {notesList.slice(0).reverse().map((note,index) => {
                    const noteRef = React.createRef();
                    notesRef.push(noteRef);
                    <NoteItem key={index} id={authContext.token ? note._id : index} title={note.title} content={note.content} onDelete={handleOnDelete} ref={notesRef[index]}/>
                })}
            </div>
        </div>
    );

} 
