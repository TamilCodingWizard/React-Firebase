
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';


export const useAuthentication = () => {
    const [error,setError] = useState(null)

    const {dispatch} = useAuthContext()

    const signup = ({email,password,lastName,firstName}) => {
        setError(null)
        createUserWithEmailAndPassword(auth,email,password)
                .then((response) => {
                    const user = response.user

                    const docRef = doc(db,"users",user.uid)

                    setDoc(docRef,{firstName,lastName})
                    dispatch({type:'LOGIN',payload:user})

                })
                .catch ((error) => {
                    console.log(error.message)
                    setError(error.message)
                })       
    }

    const login = ({email,password}) => {
        setError(null)
        
        signInWithEmailAndPassword(auth,email,password)
                .then((response) => {
                    const user = response.user
                    console.log(user.uid)
                    dispatch({type:'LOGIN',payload:user})

                })
                .catch ((error) => {
                    console.log(error.message)
                    setError(error.message)
                })       
    }

    const logout = () => {
        signOut(auth)
            .then((response) => {
                console.log('Successfully Logout')
                dispatch({type:'LOGOUT'})
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return {signup,error,login,logout}
}