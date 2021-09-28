import React, {createContext, useReducer} from "react";
import Reducer from './reducer'


const initialState = {
    keyword: ''
};


const Store = ({children} : any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context : any = createContext(initialState);
export default Store;