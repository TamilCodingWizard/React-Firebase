
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFetchCollection = (fbcollection) => {

    const [documents,setDocuments] = useState(null)

    useEffect(() => {
        let collectionRef = collection(db,fbcollection)

        const unsub = onSnapshot(collectionRef,(snapshot)  => {
            let results = []

            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(),id:doc.id})
            })
            setDocuments(results)
        })

        return () => unsub()

    },[fbcollection])


    return {documents}

}