import React from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    movies && 
    <div className='px-6 bg-black'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} poster_path={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
}

export default MovieList;
