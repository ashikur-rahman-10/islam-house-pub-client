import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../FireBase/Firebase.init";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In an user with Password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign In an user with Google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    // Logout User
    const logout = () => {
        return signOut(auth);
    };

    // UpdateUserProfile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // use onauthState change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        updateUser,
        login,
        loginWithGoogle,
        logout,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;
