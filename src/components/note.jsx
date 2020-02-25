import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(data){
    return(
        <div className="bg-white m-3 p-2 shadow-lg rounded max-w-sm">
            <h1 className="text-xl p-1">{data.title}</h1>
            <p className="p-1 text-gray-800">{data.content}</p>
            <button className="p-1 text-xs float-right hover:text-red-700 text-red-400 font-black" type="button" onClick={()=> data.onDelete(data.id)}>
            <DeleteIcon />
            </button>
        </div>
    );
}