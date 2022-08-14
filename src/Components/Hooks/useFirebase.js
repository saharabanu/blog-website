import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

// register user 
    const registerUser=(email,password,name,navigate)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    setError('');
    const newUser = {email,displayName:name };
    setUser(newUser);
   
    
    // send name to firebase after creation 
    updateProfile(auth.currentUser, {
      displayName: name,
      
    }).then(() => {
      
    }).catch((error) => {
        setError(error.code);
    });
    navigate('/');
  })
  .catch((error) => {
    setError(error.code);
    
  }) 
  .finally(()=>setIsLoading(false));

    }
// login user 
    const loginUser =(email,password,location,navigate)=>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const destination = location?.state?.from;
    navigate(destination);
    setError('');
  })
  .catch((error) => {
    setError(error.code);
  })
  .finally(()=>setIsLoading(false));
    }

    // google sign in 
    const signinWithGoogle =(location,navigate)=>{
      setIsLoading(true);
      
      signInWithPopup(auth, googleProvider)
      .then((result) => {
    
    const user = result.user;
   
    const destination = location?.state?.from || '/';
    navigate(destination);
    setError('');

    
  }).catch((error) => {
    setError(error.code)
  })
  .finally(()=>setIsLoading(false));
    }


  

    // observer user state 
    useEffect(()=>{
     const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unsubscribed;
    },[]);

   



    const logOut =()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }
  


    

    return {
        user,
        error,
        isLoading,
        registerUser,
        loginUser,
        signinWithGoogle,
        logOut
    }
}

export default useFirebase