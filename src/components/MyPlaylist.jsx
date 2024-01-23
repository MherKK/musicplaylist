

import React from 'react'
import SongRow from './SongRow'


//this component only shows the list of songs that the user has chose as its favorite list
const MyPlaylist = ({musicList}) => {

  //making a new array that only has the list of songs that are marked as favorite
  let myMusicList = musicList.filter((song) => song.isFavorite === true);
  return (
    <section className="mt-10">
    <table className="w-full border-2">
      <thead>
        <tr>
          <th className="border-2 border-r-white bg-gray-200"></th>
          <th className="border-2 border-r-white  bg-gray-200">Song Name</th>
          <th className="border-2 border-r-white  bg-gray-200">Artist Name</th>
          <th className="border-2 border-r-white  bg-gray-200">Track</th>
          <th className="border-2  bg-gray-200"></th>
        </tr>
      </thead>
      <tbody>
        {myMusicList.map((song) => <SongRow key={song.trackNumber} song={song}/>)} 
      </tbody>
    </table> 
  </section>

  )
}

export default MyPlaylist