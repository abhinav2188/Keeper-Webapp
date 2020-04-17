import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(data){
    let ct = new Date(data.created);
    let ref = React.createRef();
    let ht = 0;
    // React.useEffect(()=>{
    //     ht = ref.current.clientHeight;
    //     console.log(ht)
    //     data.setNotesHt( prevState => ([...prevState,ht]))
    // },[]);
    React.useEffect(()=>{
        ht = ref.current.clientHeight;
        data.setNotesHt(prevState =>{
            prevState[data.index] = ht;
            return prevState;
        });
        reposition();
    },[ref])

    const reposition = () => {
        console.log(data.notesHt.length);
        let harr = new Array(data.notesHt);

        console.log(harr[0]);

        let nc=4;
        let ty= 0;
        let i = data.index;
        let row = Math.floor(i/nc);
        let column = i%nc;
        console.log("row",row,"column",column);
        for(let i=0;i<row;i++){
          let rmax = Math.max(...data.notesHt.slice(nc*i,nc*(i+1)));
          let cih = rmax - data.notesHt[nc*i+column];
          
          ty+=cih;   
        }
        ty = -ty;
        // setNotesTransform(prevState => ([...prevState,ty]))

    }

    return(
        <div className="w-1/4 p-2 inline-block" style={{verticalAlign:"top",transform:"translateY("+data.tY+"px)",}} ref={ref}>
        <div className="bg-white p-2 shadow-lg rounded w-full">
            <h1 className="text-xl p-1">{data.title}</h1>
            <p className="p-1 text-gray-800">{data.content}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600 italic">created: {ct.toLocaleString()}</span>
                <button className="p-1 text-xs self-end hover:text-red-700 text-red-400 font-black" type="button" onClick={()=> data.onDelete(data.id,data.index)}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
        </div>
    );
}