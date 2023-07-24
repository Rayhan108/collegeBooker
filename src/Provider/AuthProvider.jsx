import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confiq";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  
  //  register with email and pass
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // login with email & pass
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  // google login
  const googleLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
//   reset pass
const resetPass=(email)=>{
    setLoader(true)
    return  sendPasswordResetEmail(auth,email)
}

  const authInfo = {
    user,
    loader,
    createUser,
    updateUserData,
    login,
    logout,
    googleLogin,
    setUser,
    resetPass
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
