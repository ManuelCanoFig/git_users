/* This file contains the initial state and 
the actions performe by the application */

import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import{
    SET_ALERT,
    REMOVE_ALERT
} from '../types';


const AlertState = props => {
    //This is initial state
    const initialState = null;

    //setup the dispatch to the reducer
    const [state,dispatch] = useReducer(AlertReducer,initialState);
  
    //set Alert
    const setAlert=(msg,type)=>{
        dispatch({type: SET_ALERT, payload:{msg,type}})
        setTimeout(() => dispatch({type:REMOVE_ALERT}), 5000);
    }
    return <AlertContext.Provider
        //this is available to the entire app
        value={{
           alert: state,
           setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;