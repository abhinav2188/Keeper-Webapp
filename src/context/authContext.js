import React from 'react';

const authContext = React.createContext({
    token : "",
    setToken: () => {}
});

export default authContext;
