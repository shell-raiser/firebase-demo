import {initializeApp} from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD5jD7cFbhxmVFdZVAHOs6bhs_G--vQfUw",
  authDomain: "fir-frontend-7cbae.firebaseapp.com",
  projectId: "fir-frontend-7cbae",
  storageBucket: "fir-frontend-7cbae.appspot.com",
  messagingSenderId: "285606309154",
  appId: "1:285606309154:web:4127ca1c16fa6a818a097b",
  measurementId: "G-B8WL5Z63D5"
})

// Initialize Firebase
const analytics = getAnalytics(firebaseApp);