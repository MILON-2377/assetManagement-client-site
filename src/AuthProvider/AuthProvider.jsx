import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../FirebaseAuth/Firebase.Config";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {


    // user register auth
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // user login with email and password
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {userRegister, userLogIn}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;