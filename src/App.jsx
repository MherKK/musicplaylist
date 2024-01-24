import { createContext, useState } from "react"
import SongHeader from "./components/SongHeader"
import SongList from "./components/SongList"
import musicListArray from "./music_list/musicList";
import MyPlaylist from "./components/MyPlaylist";
import MusicUploadForm from "./components/MusicUploadForm";

export const AudioContext =createContext();

function App() {

 //creating state to put the audio source and use it in the Audio component
 const [audio,setAudio] = useState('');
 //this state handles the music list that is imported from music_list folder
 const [musicList,setMusicList] = useState(musicListArray);
 //making a state to swtich between the general playlist and user's playlist
 const [playList,setPlayList] = useState('generalPlaylist');
  return (
    <>  
      <SongHeader musicList={musicList} setMusicList={setMusicList}/>
      <div className="flex gap-6 justify-center mt-6">
        <button className={`font-mono hover:bg-gray-50 ${playList === 'generalPlaylist' && 'shadow-md'}`}
                onClick={() => setPlayList('generalPlaylist')}>General Playlist
         </button>
        <button className={`font-mono hover:bg-gray-50  ${playList !== 'generalPlaylist' && 'shadow-md'}`} 
                onClick={() => setPlayList('')}>My Playlist
        </button>
      </div>
      <div className="p-4">
        <AudioContext.Provider value={[audio,setAudio,musicList,setMusicList]}>
        { playList === 'generalPlaylist' ? <SongList setMusicList={setMusicList} musicList={musicList}/> 
          : <MyPlaylist audio={audio} musicList={musicList} />
        }
        </AudioContext.Provider>
         
      </div>
      </>
  )
}

export default App
