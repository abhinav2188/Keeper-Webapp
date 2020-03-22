import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

// export default function Note(data){
//     return(
//         <div className="p-2 w-1/4">
//         <div className="bg-white p-2 shadow-lg rounded flex flex-col">
//             {data.title && <h1 className="text-xl p-1">{data.title}</h1>}
//             <p className="p-1 text-gray-800">{data.content}</p>
//             <button className="p-1 text-xs self-end hover:text-red-700 text-red-400 font-black" type="button" onClick={()=> data.onDelete(data.id)}>
//             <DeleteIcon />
//             </button>
//         </div>
//         </div>
//     );
// }

const Note = React.forwardRef( (props,ref) => (
    <div className="p-2 w-1/4 " ref={ref}>
    <div className="bg-white p-2 shadow-lg rounded flex flex-col">
        {data.title && <h1 className="text-xl p-1">{props.title}</h1>}
        <p className="p-1 text-gray-800">{props.content}</p>
        <button className="p-1 text-xs self-end hover:text-red-700 text-red-400 font-black" type="button" onClick={()=> data.onDelete(data.id)}>
        <DeleteIcon />
        </button>
    </div>
    </div>

));

export default Note;