import { useContext } from "react"
import Audio from "./Audio"
import SongRow from "./SongRow"
import { AudioContext } from "../App"

const SongList =  ({musicList}) => {
  const [audio,setAudio] = useContext(AudioContext)

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
          
        {musicList.map((song) => <SongRow key={song.trackNumber} song={song}/>)} 
        </tbody> 
      </table> 
      {audio !== '' && <Audio audio={audio}/>}
    </section>
  ) 
}

export default SongList