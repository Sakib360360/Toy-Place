import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../../firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [displayName,setDisplayName] = useState(null)
    const [displayPic,setDisplayPic]= useState(null)
    const [loading,setLoading] = useState(true)
    

    // sign in by google acount
    const signInByGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // create user by email and password
    const createUserByEmailPass = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in 
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            if(loggedUser){
                setDisplayName(loggedUser.displayName)
                setDisplayPic(loggedUser.photoURL)
            }
            
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    const authInfo={
        user,
        displayName,
        displayPic,
        createUserByEmailPass,
        signIn,
        signInByGoogle,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;