import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';

export default function AddNote(props){
    const [flag,setFlag] = useState(false);
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
        setFlag(false);
        event.preventDefault();
    }

    return(
        <div className="md:w-1/3 w-full mx-auto">
        <div className="bg-white rounded shadow-lg  m-4 p-2 ">
            <form className="w-full h-full flex flex-col relative" 
                  action="#"
                  onSubmit={handleSubmit}
                >
                {flag&&
                    <input className="p-1 focus:outline-none"
                       type="text" 
                       name="title"
                       placeholder="Title" 
                       onChange={handleChange}
                       value={note.title}
                       ></input>
                }
                <textarea className={`p-1 mb-6 focus:outline-none resize-none transition-all duration-500 ease-out`} 
                        style={{}}
                          type="text"
                          name="content" 
                          placeholder="Take a note.." 
                          onChange={handleChange}
                          value={note.content}
                          onClick={() => setFlag(true)}
                          ></textarea>
                {flag && 
                    <button style={{transform : "translateY(50%)"}} 
                        className="absolute right-0 bottom-0 mr-4 w-10 h-10 bg-green-500 rounded-full text-xs font-bold hover:bg-green-600" 
                        type="submit"
                        ><AddIcon /></button>
                }
            </form>
        </div>
        </div>

    );
}