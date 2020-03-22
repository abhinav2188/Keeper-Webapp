import React from 'react';

const activeContext = React.createContext({
    active:'',
    setActive : () => {}
});

export default activeContext;
