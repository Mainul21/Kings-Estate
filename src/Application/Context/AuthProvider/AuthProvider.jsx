import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const provider = new GoogleAuthProvider()


    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth,provider)
    }

    const setUserProfile = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return () => unSubscribe()
    },[])

    const authInfo ={
        user,
        signUp,
        logOut,
        logIn,
        setUserProfile,
        googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;