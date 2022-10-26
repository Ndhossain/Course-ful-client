import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import '../firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unSubscribe;
    }, [])

    const providerLogin = async (provider, navigate) => {
        setLoading(true);
        const auth = getAuth();
        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            setError(err)
            setLoading(false);
        } finally {
            if(!loading && !error) {
                navigate()
            }
        }
    }

    const registerUser = async (email, password, userName, userImageURL, navigate) => {
        setLoading(true);
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: userName,
                photoURL: userImageURL,
            })
            const user = auth.currentUser;
            setCurrentUser({
                ...user
            })
        } catch (err) {
            setError(err);
        } finally {
            if(!loading && currentUser) {
                console.log(error);
                navigate();
            }
        }
    }

    const loginUser = (email, password) => {
        setLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ currentUser, providerLogin, logoutUser, loading, registerUser, error, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
