import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'



const initial = {
    transictions : [
        {id:1, text: 'flower', amount:-200},
        {id:2, text: 'fruits', amount:-120},
        {id:3, text: 'apple', amount:-220},
        {id:4, text: 'mango', amount:-520}
    ]
}

// create context 
export const GlobalContext = createContext(initial);


// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initial);

    return (<GlobalContext.Provider value={{
        transictions : state.transictions
    }}>
        {children}
    </GlobalContext.Provider>)
}