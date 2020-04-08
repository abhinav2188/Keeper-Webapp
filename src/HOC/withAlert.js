import React from 'react';
import Alert from '../components/UI/alert';
import AlertContext from '../context/alertContext';
import Spinner from "../components/UI/spinner/spinner";
import LoadingContext from "../context/loadingContext";
import Confirm from "../components/UI/confirm";
import ConfirmContext from "../context/confirmContext";

const withAlert =  ( WrappedComponent) => {
    const Cmp = (props) => {
        const [alert,setAlert] = React.useState({
            msg:"",
            show:false,
            type:""
        });
        const [isLoading, setIsLoading] = React.useState(false);
        const [confirm,setConfirm] = React.useState({
            show:false,
            msg:"",
            onConfirm:() => {},
            onCancel:()=>{} 
        });
        confirm.onCancel= () => {
            setConfirm({
                show:false,
                msg:"",
                onConfirm:() => {},
            })
        } 
        React.useEffect(()=>{
            if(alert.show)
            setTimeout(()=>setAlert(prevState => ({...prevState,show:false})),2000);
        },[alert]);

        return (
            <ConfirmContext.Provider value={{confirm:confirm,setConfirm:setConfirm}}>
            <LoadingContext.Provider value={{isLoading:isLoading,setIsLoading:setIsLoading}}>
            <AlertContext.Provider value={{alert:alert,setAlert:setAlert}}>
                <Spinner show={isLoading} />
                <Confirm show={confirm.show} msg={confirm.msg} confirmFunc = {confirm.onConfirm} cancelFunc={confirm.onCancel}/>
                <Alert show={alert.show} type={alert.type}>{alert.msg}</Alert>
                <WrappedComponent {...props} />
            </AlertContext.Provider>
            </LoadingContext.Provider>
            </ConfirmContext.Provider>
        );
    }
    return Cmp;
}

export default withAlert;