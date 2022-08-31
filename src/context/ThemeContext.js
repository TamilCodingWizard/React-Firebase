
import { createContext, useEffect } from 'react';
import { useReducer } from 'react';


export const ThemeContext = createContext()

const ThemesReducer = (state,action) => {
    switch (action.type) {
        case 'LIGHT':
            return {...state,theme:'light'}
        case 'DARK':
            return {...state,theme:'dark'}
        default:
            return state
    }
}


export const ThemeContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(ThemesReducer,{theme : 'light'})

    useEffect(() => {
        if (state.theme === 'light') {
            document.body.style.backgroundColor = '#f2e9e6'
        } else {
            document.body.style.backgroundColor = '#e1e5ed'
        }
    },[state.theme])
    return (
        <ThemeContext.Provider  value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>

    )
}


