import React from 'react'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={poster_path} alt="movie"/>
    </div>
  )
}

export default MovieCard