import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(data){
    let ct = new Date();
    if(data.created){
        ct = new Date(data.created);
    }
    let created = ct.toLocaleString();
    let todayDate =  new Date(Date.now()).toLocaleDateString();
    if(ct.toLocaleDateString() === todayDate){
        created = ct.toLocaleTimeString();
    }

    // let ref = React.createRef();
    // let ht = 0;
    // const [tY,setTY] = React.useState(0);

    // React.useEffect(()=>{
    //     ht = ref.current.clientHeight;
    //     data.setNotesHt(prevState =>{
    //         prevState[data.index] = ht;
    //         return prevState;
    //     });
    // },[ref])

    // const reposition= (nc) => {
    //     console.log(data.notesHt);
    //     let htArr = new Array(...data.notesHt);
    //     data.notesHt.map( ht => console.log(ht));
    //     console.log(htArr[0]);
    //     let ty= 0;
    //     let row = Math.floor(data.index/nc);
    //     let column = data.index%nc;
    //     console.log("row",row,"column",column);
    //     for(let i=0;i<row;i++){
    //         console.log('inside loop',i);
    //         console.log(htArr.length);
    //         console.log(htArr.slice(4*i,4*(i+1)));
    //       let rmax = Math.max(...data.notesHt.slice(nc*i,nc*(i+1)));
    //       console.log(...htArr.slice(nc*i,nc*(i+1)));
    //       let cih = rmax - data.notesHt[nc*i+column];
    //       ty+=cih;   
    //     }
    //     ty = -ty;
    //     console.log(ty);
          
    // }

    
    return(
        <div className="lg:w-1/4 md:w-1/2 w-full p-2 inline-block " style={{verticalAlign:"top"}} >
        <div className="bg-white p-2 shadow-lg rounded w-full border-t-4 border-yellow-500 flex flex-col">
        <span className="text-xs text-yellow-600 bold self-end">{created}</span>
            <h1 className="text-xl p-1">{data.title}</h1>
            <p className="p-1 text-gray-800">{data.content}</p>
            <button className="p-1 md:text-sm test-xs self-end hover:text-red-700 text-red-400 font-black" type="button" onClick={()=> data.onDelete(data.id,data.index)}>
                    <DeleteIcon />
            </button>
            {/* <div class="flex justify-between items-center">
            </div> */}
        </div>
        </div>
    );
}
// ref={ref}
// transform:"translateY("+data.tY+"px)"