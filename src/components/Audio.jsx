import React from 'react'

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