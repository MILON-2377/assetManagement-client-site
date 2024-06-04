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
import isUserLoggedIN from "../Hooks/UsersDataLoadApi/isUserLoggedIn";
import isManagerHandle from "../Hooks/UsersDataLoadApi/isManager";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
      if (currentUser) {
        setUser(currentUser);
        isUserLoggedIN(currentUser);
        // console.log(userData);
      } else {
        setUser(null);
      }
    });

    return () => unSubScribe();
  }, []);

  // user logOut
  const logOut = () => {
    // isManagerHandle("LogOut");
    return signOut(auth);
  };

  const authInfo = { userRegister, userLogIn, googleLogIn, user, logOut};

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
