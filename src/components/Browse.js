import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);

  useNowPlayingMovies();

  return (
    <div>
      <Header/> 
      {
        showGptSearch ? (<GptSearch/>) : (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
      {/* 
      MainContainer
       -VideoContainer
       -VideoTitle
      SecondaryContainer
       -MovieList * n
         -cards * n

       */}
    </div>
  )
}

export default Browse