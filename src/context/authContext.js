import React from 'react';

const authContext = React.createContext({
    isAuthenticated : false,
    token : "",
    login: () => {},
    logout: () => {}
});

export default authContext;
