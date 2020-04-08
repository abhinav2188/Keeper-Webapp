import React from 'react';

const loadingContext = React.createContext({
    isLoading : "",
    setIsLoading: () => {}
});

export default loadingContext;
