import React, { createContext, useState } from 'react';
import { app } from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
   // const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(true);                        

    //signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

   const authInfo={
    user,
    setUser,
    createUser,
    signIn
   }
 return (
  <div>
      <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>                                                                                    
  </div>
  );
};

export default AuthProvider;