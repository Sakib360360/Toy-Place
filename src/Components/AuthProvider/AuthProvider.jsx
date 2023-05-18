import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../../firebase.config';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [displayName,setDisplayName] = useState(null)
    const [displayPic,setDisplayPic]= useState(null)
    console.log(displayName,displayPic)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
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
        signInGoogle,
        createUser,
        signIn,
        logOut,
        loading,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;