
import {initializeApp } from 'firebase/app'

import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    // Add your config details here //
};

  initializeApp(firebaseConfig)

  const db = getFirestore()

  export {db}

  