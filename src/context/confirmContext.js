import React from 'react';

const confirmContext = React.createContext({
    confirm : {
        show:false,
        msg:"",
        onConfirm:() => {},
        onCancel:()=>{} 
    },
    setConfirm : () => {}
});

export default confirmContext;