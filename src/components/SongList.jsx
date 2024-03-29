import { useContext } from "react"
import Audio from "./Audio"
import SongRow from "./SongRow"
import { AudioContext } from "../App"
import MusicUploadForm from "./MusicUploadForm"

// creating the song list with the table header and the table rows that has all the audio details in it
const SongList =  ({musicList,setMusicList}) => {

  //passing audio source to Audio component
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
      <MusicUploadForm musicList={musicList} setMusicList={setMusicList}/> 
    </section>
  ) 
}

export default SongList