import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/AuthConfig";
import axios from "axios";

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
        // setLoading(true);
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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)



            const userEmail = currentUser?.email || user?.email;
            // set a token for this user 
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: userEmail }, { withCredentials: true })
                    .then(res => {
                        console.log('Token set : ', res.data)
                    })
            }// set a token for this user end
            //remove token if user logout
            else {
                axios.post('http://localhost:5000/logout', { email: userEmail }, { withCredentials: true })
                    .then(res => {
                        console.log('Token removed', res.data)
                    })
            }//remove token if user logout end




        });


        return () => {
            unSubscribe()
        }

    }, [])


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

