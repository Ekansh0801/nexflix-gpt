import React from 'react'
import { useSelector } from 'react-redux'
import VideoTtile from './VideoTtile';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[27];
    // console.log(mainMovie);

    const {original_title,overview,_id} = mainMovie;

  return (
    <div className='overflow-hidden'>
        <VideoTtile title={original_title} overview={overview}/>
        <VideoBackground movieId={_id}/>
    </div>
  )
}

export default MainContainer