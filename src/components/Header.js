import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import {LOGO, SUPPORTED_LANGUAGES} from "../utils/constants";
import {AVATAR_ICON} from "../utils/constants";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });    
  }

  const handleGptSeach = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  }
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });
    //this will unsubscripe when components unmount
    return () => unsubscribe();
   },[]); 

  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between z-50'>
        <img className='w-44' src={LOGO}/>
        {user && <div className='flex p-2'>
          {showGptSearch && <select className='p-2 m-2 bg-gray-500 text-white bg-opacity-50' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier} className='bg-opacity-50'>{lang.name}</option>
            ))}
          </select>}
          <button className='py-2 px-4 mg-2 bg-purple-800 text-white rounded-lg mx-4 my-2 cursor-pointer' onClick={handleGptSeach}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
          <img className='w-12 h-12' src={user?.photoURL}/>
          <button onClick={handleSignOut} className='cursor-pointer font-bold text-white'>Sign out</button>
        </div>}
    </div>
  )
}

export default Header