import React, { useEffect } from 'react'
import {API_OPTIONS} from "../utils/constants"
import { useDispatch } from 'react-redux';
import  { addTrailerVideos } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    // console.log(movieId);
  
    // Function to convert YouTube watch URL to embed URL
    const getEmbedUrl = (url) => {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    };
    // Fetch trailer video
    const getMovieTrailer = async () => {
      try {
        const response = await fetch(`https://movies-api14.p.rapidapi.com/movie/${movieId}`, API_OPTIONS);
        const json = await response.json();
        const embedUrl = getEmbedUrl(json.movie.youtube_trailer);
        dispatch(addTrailerVideos(embedUrl));
      } catch (error) {
        console.error('Failed to fetch movie trailer:', error);
      }
    };
  
  
    useEffect(() => {
      getMovieTrailer();
    },[])    
}

export default useMovieTrailer;