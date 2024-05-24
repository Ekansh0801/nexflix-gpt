import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'

const Browse = () => {

    const getNowPlayingMovies = async() => {
      const data = await fetch("https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1",API_OPTIONS);
      const json = await data.json();
      console.log(json);
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])

  return (
    <div>
      <Header/> 
    </div>
  )
}

export default Browse