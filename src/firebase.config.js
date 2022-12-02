import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC8d9yvcEkgapakbshE2ctuEMaE8-WUxXc",
  authDomain: "clever-todo-list-61938.firebaseapp.com",
  projectId: "clever-todo-list-61938",
  storageBucket: "clever-todo-list-61938.appspot.com",
  messagingSenderId: "317088604316",
  appId: "1:317088604316:web:f0df8d5f6b57a523388d59",
  measurementId: "G-R7BLR7MBPV"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app)