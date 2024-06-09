import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseAuth/Firebase.Config";
import isUserLoggedIN from "../Hooks/UsersDataLoadApi/isUserLoggedIn";
import usePublicApi from "../Hooks/PublicApi/usePublicApi";
import isLoading from "../Hooks/Loading/loading";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const publicApi = usePublicApi();

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
        setLoading(false);
        const userEmail = currentUser.email;

        // token
        publicApi
          .post("/jwt", { userEmail })
          .then((res) => {
            const token = res.data.token;
            if (token) {
              localStorage.setItem("userToken", token);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        isUserLoggedIN(currentUser);
      } else {
        setUser(null);
        localStorage.removeItem("userToken");
      }
    });

    return () => unSubScribe();
  }, []);

  // user logOut
  const logOut = () => {
    // isManagerHandle("LogOut");
    setLoading(true);
    isLoading(true);
    return signOut(auth);
  };

  // update profile
  const handleUpdateProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const authInfo = {
    userRegister,
    userLogIn,
    googleLogIn,
    user,
    logOut,
    Loading,
    handleUpdateProfile,
    setLoading
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
