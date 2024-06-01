import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseAuth/Firebase.Config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // user register auth
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // social login
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // is user active
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null);
    });

    return () => unSubScribe();
  }, []);

  // user logOut
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { userRegister, userLogIn, googleLogIn, user, logOut };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
