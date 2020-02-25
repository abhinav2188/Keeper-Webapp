import React from 'react';

export default function Note(data){
    return(
        <div className="bg-white m-4 shadow-lg rounded max-w-sm">
            <h1 className="text-xl mt-1 mx-2 p-1">{data.title}</h1>
            <p className="mt-1 mx-2 mb-2 p-1">{data.content}</p>
            <button className="p-1 mr-2 mb-1 text-xs float-right" type="button" onClick={()=> data.onDelete(data.id)}>DELETE</button>

        </div>
    );

}