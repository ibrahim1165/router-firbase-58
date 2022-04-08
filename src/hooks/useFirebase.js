import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import app from "../firebase.int"

 const googleprovider = new GoogleAuthProvider();
 const auth = getAuth(app);

const useFirebase =()=>{
    const [user,setuser]= useState({});
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setuser(user);
        })
    },[])

    const singInWithGoogle =()=>{
        signInWithPopup(auth,googleprovider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setuser(user, token);
            console.log(user, token);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });}
        
    const handleSingOut = () => {
        signOut(auth)
        .then(()=>{

        })
      }
   

    return{ user,
        singInWithGoogle,
        handleSingOut
    }
}
export default useFirebase;