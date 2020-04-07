import React from 'react';
import Alert from '../components/UI/alert';
import AlertContext from '../context/alertContext';

const withAlert =  ( WrappedComponent) => {
    const Cmp = (props) => {
        const [alert,setAlert] = React.useState({
            msg:"",
            show:false,
            type:""
        });
        React.useEffect(()=>{
            if(alert.show)
            setTimeout(()=>setAlert(prevState => ({...prevState,show:false})),2000);
        },[alert]);

        return (
            <AlertContext.Provider value={{alert:alert,setAlert:setAlert}}>
                <Alert show={alert.show} type={alert.type}>{alert.msg}</Alert>
                <WrappedComponent {...props} />
            </AlertContext.Provider>
        );
    }
    return Cmp;
}

export default withAlert;