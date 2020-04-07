import React from 'react';

const alertContext = React.createContext({
    alert : {
        msg:'',
        show:false,
        type:"info"
    },
    setAlert : () => {}
});

export default alertContext;
