import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/AuthConfig";

export const AllContext = createContext()

const Authprovider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignInWithPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateOnSignUp = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userlogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });

        return () => {
            unSubscribe()
        }

    }, [])


    console.log(user)













    const allInfo = {
        user,
        setUser,
        loading,
        googleSignInWithPopup,
        registerUser,
        userLogIn,
        userlogOut,
        userUpdateOnSignUp
    }
    return (
        <>
            <AllContext.Provider value={allInfo}>
                {children}
            </AllContext.Provider>
        </>
    );
};

export default Authprovider;

Authprovider.propTypes = {
    children: PropTypes.node
};

