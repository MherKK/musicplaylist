import { useState } from 'react';
import { add, play, search } from '../image_list/images'
import musicListArray from '../music_list/musicList';


//header component that has play,add,sort and search features in it.

const SongHeader = ({musicList,setMusicList}) => {

  const [playAll,setPlayAll] =useState(true)

  //  //this function sorts the array in descending order
  function sortDescOrder(){
    let newArray = [];
      for(let i = 0 ; i< musicList.length ; i++){
        for(let j= i + 1 ; j < musicList.length; j++){
          let n = 0;
          if(musicList[i].trackNumber < musicList[j].trackNumber){
            n = musicList[i];
            musicList[i] = musicList[j];
            musicList[j] = n;
          }
        }
        newArray.push(musicList[i])
      }
      return newArray;
  }

  //this function sorts the array in ascending order
  function sortAsecOrder(){
    let newArray = [];
      for(let i = 0 ; i< musicList.length ; i++){
        for(let j= i + 1 ; j < musicList.length; j++){
          let n = 0;
          if(musicList[i].trackNumber > musicList[j].trackNumber){
            n = musicList[i];
            musicList[i] = musicList[j];
            musicList[j] = n;
          }
        }
        newArray.push(musicList[i])
      }
      return newArray;
  }
//this function shuffles the array in randomized order
  function sortRandomly(){
    let newArray = [];
    for (let i = musicList.length - 1; i >= 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [musicList[i], musicList[j]] = [musicList[j], musicList[i]]; 
      newArray.push(musicList[i])
    } 
    return newArray; 
  }

  return (
    <div className='flex justify-evenly  bg-gray-300 font-serif  max-[900px]:flex-col-reverse gap-4  items-center p-4'>
        <div className='flex mr-[10%] gap-2 max-[900px]:w-screen max-[900px]:justify-end'>
          <button onClick={() => console.log('All songs will be played')} 
           className='border-2 hover:bg-gray-200 hover:text-white border-gray-400 h-8 tracking-[1px] flex sm:w-[140px] justify-center items-center text-[14px] bg-white rounded-lg px-6'>
            <img src={play} alt='Play all songs icon' />
            Play All
          </button>
          {playAll === true ?
          <button onClick={() => {
            setPlayAll(false)
            setMusicList(musicList.map(song => {
             return {...song,isFavorite:true}
            }))
            console.log('All songs are added to My Playlist');
          }} className='border-2 h-8 hover:bg-gray-200 hover:text-white tracking-[1px] border-gray-400 flex justify-center  items-center text-[14px] bg-white rounded-lg px-6'>
                <img src={add} alt='Add all songs icon'/>
            Add All
          </button>
           :
           <button onClick={() => {
            setPlayAll(true)
            setMusicList(musicList.map(song => {
             return {...song,isFavorite:false}
            }))
            console.log('All songs are removed from My Playlist');
          }} className='border-2 h-8 hover:bg-gray-200 hover:text-white tracking-[1px] border-gray-400 flex justify-center  items-center text-[14px] bg-white rounded-lg px-6'>
            - Remove All
          </button>
          }
        </div>
        <div className='flex gap-4'>
            <select onChange={(e) => {
              if(e.target.value == 'a-z'){
                setMusicList(sortAsecOrder())
              }else if (e.target.value == 'z-a'){
                setMusicList(sortDescOrder())
              }else{
                setMusicList(sortRandomly())
              }
            }} className='border-2 h-8 tracking-[1px] bg-white px-6 border-gray-400 rounded-lg'>
                <option value="shuffle">Shuffle</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
            </select>
            <div className='relative'>
                <img className='w-4 absolute top-2 left-1 z-20' src={search} alt='search icon'/>
                <input 
                  onChange={(e) => {
                    setMusicList(musicList.filter(song => {
                      return song.songName.toLowerCase().includes(e.target.value.toLowerCase()) || song.artistName.toLowerCase().includes(e.target.value.toLowerCase())
                    }))
                    if(e.target.value == ''){
                      setMusicList(musicListArray)
                    }
                  }} 
                  className='border-2 h-8 pl-6 relative tracking-[1px] bg-white border-gray400 rounded-lg px-2' placeholder='Search' />
            </div>
        </div>
    </div>
  )
}

export default SongHeader