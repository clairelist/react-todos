import {useState} from 'react';

function useLocalStorage(key, initValue){
    const [state, setState]= useState(()=>{
        if (localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        } else {
            return initValue;
        }
    })

    const setStoredState = (value)=>{
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
    }
    
    return ([state, setStoredState]);
}

export default useLocalStorage;