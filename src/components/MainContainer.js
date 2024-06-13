import React from 'react'
import { useSelector } from 'react-redux'
import VideoTtile from './VideoTtile';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title,overview} = mainMovie;

  return (
    <div>
        <VideoTtile title={original_title} overview={overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer