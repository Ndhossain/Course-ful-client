import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import '../firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setCurrentUser(user);
        })

        return unSubscribe;
    }, [])

    const providerLogin = (provider) => {
        const auth = getAuth();
        try {
            signInWithPopup(auth, provider);
        } catch (err) {
            console.log(err.message);   
        }
    }

    const logoutUser = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ currentUser, providerLogin, logoutUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
