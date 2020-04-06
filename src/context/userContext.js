import React from 'react';

const userContext = React.createContext({
    user : {
        name : "",
        id: "",
        notes: []
    },
    setUser : () => {}
});

export default userContext;