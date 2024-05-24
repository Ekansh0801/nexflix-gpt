import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';  
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {AVATAR_ICON} from "../utils/constants"

const Login = () => {
  const [isSigninForm,setSigninForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setSigninForm(!isSigninForm);
  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
   const message = checkValidData(email.current.value,password.current.value); 
  //  console.log(message);
   setErrorMessage(message);
   if(message) return;
   //signup signin logic
   if(!isSigninForm){
    //sign up logic
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: AVATAR_ICON
      }).then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message);
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      // ..
    });
   }
   else{
    //signin logic
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;    
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage("Login credentials wrong!!");
    });    
   }

  }
  return (
    <div>
        <div>
        <Header/>
        </div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 '>
            <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In" : "Sign Up"}</h1>
            {!isSigninForm && (<input ref={name} type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>)}
            <input ref={email} type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSigninForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSigninForm ? "New to Netfix? Signup Now" : "Already Registered? Sign In Now..."}</p>
        </form>


    </div>
  )
}

export default Login