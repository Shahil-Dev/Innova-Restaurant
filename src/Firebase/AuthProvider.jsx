import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import React, { createContext, useEffect, useState } from 'react';
import auth from "./firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //For all info use it!
    const google = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const loggedUser = result.user;
            console.log("Google User:", loggedUser);
            setUser(loggedUser);
            return loggedUser;
        } catch (error) {
            console.error("Google Sign-in Error:", error);
        } finally {
            setLoading(false);
        }
    };



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        signUp,
        signin,
        logOut,
        google
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("Current user:", currentUser);
        });

        // ✅ Cleanup listener properly
        return () => unsubscribe();
    }, []);



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;