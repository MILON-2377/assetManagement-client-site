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
import usePublicApi from "../Hooks/PublicApi/usePublicApi";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
        const userEmail = currentUser.email;

        // token
        publicApi.post("/jwt", {userEmail})
        .then(res => {
          const token = res.data.token;
          if(token){
            localStorage.setItem("userToken", token);
          }
        })
        .catch(error => {
          console.log(error);
        })

        setLoading(false);
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
    return signOut(auth);
  };

  const authInfo = { userRegister, userLogIn, googleLogIn, user, logOut, loading};

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
