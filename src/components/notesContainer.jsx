import React,{useState} from 'react';
import NoteItem from './note.jsx';
import AddNote from './addNote.jsx';
import { responsiveFontSizes } from '@material-ui/core';

const axios = require('axios');

export function DefaultNotesContainer(props){
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

export class UserNotesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes : [],
        }
    }
    fetchNotes(){
        let uid = window.sessionStorage.getItem("userId");
        axios.get('http://localhost:5000/notes',{
            params : {
                id : uid
            }
        }).then( (response) => {
            console.log(response.data.notes);
            this.setState({
                notes : response.data.notes
            })
        }).catch( (error) => {
            console.log(error.response);
        });
    }
    addNote(note){
        const datas = new URLSearchParams();
        datas.append('content',note.content);
        datas.append('title',note.title);
        axios({
            method:'POST',
            url : 'http://localhost:5000/addnote',
            params : {
                id: window.sessionStorage.getItem("userId")
            },
            data : datas
        }).then( (response) => {
            console.log(response);
        }).catch( (error) => {
            console.log(error.response);
        });
        this.fetchNotes();
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerived');
        return state; 
    }
    componentDidMount(){
        this.fetchNotes();
    }
    render(){
        return(
            <div>
            <AddNote onAdd={this.addNote}/>
            <div className="flex p-6 flex-wrap items-start">
                {this.state.notes.map((note,index) => (<NoteItem key={index} id={index} title={note.title} content={note.content}/>) )}
            </div>
        </div>

        );

    }
}