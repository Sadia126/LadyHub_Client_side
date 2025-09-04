import { createContext, useEffect, useState } from "react";
import { 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";

import toast from "react-hot-toast";
import auth from "../Firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Google login only
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        console.error("Google login error:", error);
        toast.error("Login failed");
      });
  };

  // 🔹 Logout
  const logout = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Logout failed");
      });
  };

  // 🔹 Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authentication = {
    googleLogin,
    logout,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
