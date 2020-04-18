import React,{useState,useEffect} from 'react';
import NoteItem from './note.jsx';
import AddNote from './addNote.jsx';
import AuthContext from '../context/authContext';
import AlertContext  from '../context/alertContext';
import LoadingContext from "../context/loadingContext";
import ConfirmContext from "../context/confirmContext";

import axios from "../axios-instance";

// let notesConainterStyle = {
//         columnCount: 4,
//         columnGap: "1rem"
// }

export default function NotesContainer(){
    const [notesList, setNotesList] = useState([]);
    const authContext = React.useContext(AuthContext);
    const alertContext = React.useContext(AlertContext);
    const loadingContext = React.useContext(LoadingContext);
    const confirmContext = React.useContext(ConfirmContext);
    // const [notesHt,setNotesHt] = useState([]);

    // console.log("notes",notesHt,notesHt.length,typeof(notesHt));
    // const [notesTransform , setNotesTransform] = useState([]);
    
    function fetchNotes(){
        loadingContext.setIsLoading(true);    
        axios.get('/notes',{
            params : {
                id : authContext.token
            }
        }).then( (response) => {
            loadingContext.setIsLoading(false);    
            setNotesList(response.data.notes);
        }).catch( (error) => {
            loadingContext.setIsLoading(false);    
            alertContext.setAlert({
                show:true,
                msg:error.response.data.errorMsg,
                type:"failure"
            });          
        });
    }

    useEffect( ()=> {
        if(authContext.token){
        fetchNotes();
        }else
        setNotesList([]);
    },[authContext.token]);

    // useEffect( () => {
    //     setNotesHt([]);
    // },[notesList]);
    // useEffect( () =>{
    //     repositionNotes(4);
    //     console.log('reposition on notesHt');
    // },[notesHt]);

    function handleAddNote(newNote){
        if(authContext.token){
            loadingContext.setIsLoading(true);    
            let noteData = new URLSearchParams();
            noteData.append('content',newNote.content);
            noteData.append('title',newNote.title);
            axios({
                method:'POST',
                url : '/addnote',
                params : {
                    id: authContext.token
                },
                data : noteData
            }).then( (response) => {
                loadingContext.setIsLoading(false);    
                alertContext.setAlert({
                    show:true,
                    msg:response.data.msg,
                    type:"success"
                });
                fetchNotes();   
            }).catch( (error) => {
                loadingContext.setIsLoading(false);    
                alertContext.setAlert({
                    show:true,
                    msg:error.response.data.errorMsg,
                    type:"failure"
                });          
            });
        }
        else{
            setNotesList(prevList => ([...prevList,newNote]) );
        }
    }
    const confirmOnDelete = (id,index) => {
        confirmContext.setConfirm({
            show:true,
            msg:"This note will be deleted, click on confirm to continue",
            onConfirm: () => {handleOnDelete(id,index); confirmContext.setConfirm({show:false}) },
            onCancel : () => {
                confirmContext.setConfirm({
                    show:false
                });
            } 
        });

    }
    function handleOnDelete(id,index){
        if(authContext.token){
            loadingContext.setIsLoading(true);    
            axios.delete('/deleteNote',{
                params : {
                    userId : authContext.token,
                    noteId : id
                }
            }).then( (response) => {
                loadingContext.setIsLoading(false);    
                alertContext.setAlert({ 
                    show:true,
                    msg:response.data.msg,
                    type:"success"
                });          
                fetchNotes();
            }).catch( (error) => {
                loadingContext.setIsLoading(false);    
                alertContext.setAlert({
                    show:true,
                    msg:error.response.data.errorMsg,
                    type:"failure"
                });          
            });
        }
        else{
            setNotesList(prevList => ( prevList.filter( (note,index) => (index !== id))) );
        }

    }

    // const repositionNotes= (nc) => {
    //     if(nc !== 1){
    //         console.log(nc);
    //         console.log(notesHt.length);
    //         setNotesTransform([]);
    //         for(let i=0;i<notesHt.length;i++){
    //             let ty= 0;
    //             let row = Math.floor(i/nc);
    //             let column = i%nc;
    //             console.log("row",row,"column",column);
    //             for(let i=0;i<row;i++){
    //               let rmax = Math.max(...notesHt.slice(nc*i,nc*(i+1)));
    //               let cih = rmax - notesHt[nc*i+column];
    //               ty+=cih;   
    //             }
    //             ty = -ty;
    //             setNotesTransform(prevState => ([...prevState,ty]))
              
    //           }
    
    //     }
          
    // }

    return(
        <div className="my-8">
            <AddNote onAdd={handleAddNote}/>
            {/* <button onClick={()=>repositionNotes(4)}>Reposition</button> */}
            <div className="my-8 px-2 ">
                {notesList.slice(0).reverse().map((note,index) => (
                    <NoteItem key={index} 
                        id={authContext.token ? note._id : index} 
                        title={note.title} 
                        content={note.content} 
                        onDelete={confirmOnDelete}
                        created={note.created}
                        // setNotesHt={setNotesHt}
                        // index={index}
                        // notesHt={notesHt}
                        // tY = {notesTransform[index]}
                        />
                ) )}
            </div>
        </div>
    );

}
