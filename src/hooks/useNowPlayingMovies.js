import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


const useNowPlayingMovies = async() => {
  const dispatch = useDispatch();

   const getNowPlayingMovies = async() => {

  const data = await fetch("https://movies-api14.p.rapidapi.com/movies",API_OPTIONS);
  const json = await data.json();
  // console.log("hulu");
  console.log(json.movies);
  dispatch(addNowPlayingMovies(json.movies));
  }


  useEffect(() => {
    getNowPlayingMovies();
  },[])    
}

export default useNowPlayingMovies;