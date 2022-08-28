
import {initializeApp } from 'firebase/app'

import { getAuth} from 'firebase/auth'
import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    // Add your config details here //
    
};


  initializeApp(firebaseConfig)

  const db = getFirestore()

  const auth = getAuth()


  export {db,auth}

  