import React from 'react'

const VideoTtile = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className="">
            <button className='bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>▷ Play</button>
            <button className='bg-gray-500 mx-2 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}


export default VideoTtile