import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


const useNowPlayingMovies = () => {
    const dispatch = useDispatch(); 

    const getNowPlayingMovies = async() => {
      const data = await fetch("https://netflix-data.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25",API_OPTIONS);
      const json = await data.json();
      console.log(json.movies);
      dispatch(addNowPlayingMovies(json.movies));

  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])    
}

export default useNowPlayingMovies;