import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPGmMmsScheiUw9z_ii4D3lkATcoaGUOo",
  authDomain: "charapp-c0525.firebaseapp.com",
  projectId: "charapp-c0525",
  storageBucket: "charapp-c0525.appspot.com",
  messagingSenderId: "172282914714",
  appId: "1:172282914714:web:999a7d0e23732ae6167c23",
  measurementId: "G-KFG9Y2F8GJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
