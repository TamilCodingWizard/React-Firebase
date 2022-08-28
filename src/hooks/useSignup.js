
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';


export const useSignup = () => {
    const [error,setError] = useState(null)

    const signup = ({email,password,lastName,firstName}) => {
        setError(null)
        createUserWithEmailAndPassword(auth,email,password)
                .then((response) => {
                    const user = response.user

                    const docRef = doc(db,"users",user.uid)

                    setDoc(docRef,{firstName,lastName})

                })
                .catch ((error) => {
                    console.log(error.message)
                    setError(error.message)
                })

    }

    return {signup,error}
}