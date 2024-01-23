import { useContext } from "react"
import { heart, play, redHeart, share, tick } from "../image_list/images"
import { AudioContext } from "../App";

const SongRow = ({song}) => {
    const [audio,setAudio,musicList,setMusicList] = useContext(AudioContext)
  return (
    <tr className="border-b h-10 text-center">
        <td className="hover:bg-gray-50">
          <button className="w-full flex justify-center" 
                  onClick={() => setAudio(song.src)}>
            <img src={play}/>
          </button>
        </td>
        <td >{song.songName}</td>
        <td>{song.artistName}</td>
        <td>{song.trackNumber}</td>
        <td className=" flex justify-center gap-2 h-10 items-center">
            <button onClick={() => {
              setMusicList(musicList.map(music => {
                if(music.trackNumber === song.trackNumber){
                  return {...song,isFavorite:!song.isFavorite}
                }else{
                  return music
                }
              }))
            }}>
              <img className="w-4 h-4" alt="heart icon" src={song.isFavorite === false ? heart : redHeart}/>  
            </button> 
            <img className="w-4 h-4" alt="tick icon" src={tick}/> 
            <img className="w-4 h-4" alt="share icon" src={share}/>
        </td> 
    </tr>
  )
}

export default SongRow