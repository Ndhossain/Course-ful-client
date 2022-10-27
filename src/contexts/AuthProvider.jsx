import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import '../firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unSubscribe;
    }, [])

    const providerLogin = async (provider) => {
        setLoading(true);
        const auth = getAuth();
        return await signInWithPopup(auth, provider);
    }

    const registerUser = async (email, password, userName, userImageURL) => {
        setLoading(true);
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser)
        await updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userImageURL,
        })
        const user = auth.currentUser;
        setCurrentUser({
            ...user
        })
    }

    const loginUser = (email, password) => {
        setLoading(true);
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
        const auth = getAuth();
        return sendPasswordResetEmail(auth, email);
    }

    const logoutUser = () => {
        const auth = getAuth();
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ currentUser, providerLogin, logoutUser, loading, registerUser, loginUser, setLoading, resetPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
