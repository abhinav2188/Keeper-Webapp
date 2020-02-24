import React, {useState} from 'react';

export default function AddNote(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    function handleChange(event){
       let value = event.target.value;
       let name = event.target.name;
       setNote(prevState => ({...prevState,[name] : value}) );
    }
    function handleSubmit(event){
        props.onAdd(note);
        setNote({title:'',content:''});
        event.preventDefault();
    }

    return(
        <div className="bg-white rounded-lg shadow-lg mx-auto m-4" style={{width:"28rem"}} >
            <form className="w-full h-full flex flex-col relative" 
                  action="#"
                  onSubmit={handleSubmit}
                  >
                <input className="mt-1 mx-2 p-1" 
                       type="text" 
                       name="title"
                       placeholder="Title" 
                       onChange={handleChange}
                       value={note.title}
                       ></input>
                <textarea className="mt-1 mx-2 p-1 h-24 mb-6" 
                          type="text"
                          name="content" 
                          placeholder="Note Content" 
                          onChange={handleChange}
                          value={note.content}
                          ></textarea>
                <button style={{transform : "translateY(50%)"}} 
                        className="absolute right-0 bottom-0 mr-4 w-10 h-10 bg-green-500 rounded-full" 
                        type="submit"
                        >Add</button>
            </form>
        </div>

    );
}