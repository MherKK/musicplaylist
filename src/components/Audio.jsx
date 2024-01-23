import React from 'react'


//this component takes the source of a music and plays it on the web
const Audio = ({audio}) => {
  return (
    <div className='w-full mt-2'>
        <audio className='w-full' autoPlay src={audio} controls>
            <source  src={audio} />
        </audio>
    </div>
  )
}

export default Audio