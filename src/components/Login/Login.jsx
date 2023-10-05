import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init'
import { Link } from 'react-router-dom';

const login = () => {
    const [user,setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignin = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggeduser = result.user;
            setUser(loggeduser);
            console.log(loggeduser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const Signout = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            {
                user?<button onClick={Signout}>SignOut</button>: <button onClick={handleGoogleSignin}>Login</button>
            }
           
            
            {
               user && <div><h1>User Name : {user.displayName}</h1><p>{user.email}</p>            </div>

               
            }
        </div>
    );
};

export default login;