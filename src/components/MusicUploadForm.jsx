import React, { useState } from 'react'
import { downArrow, upArrow } from '../image_list/images';
import axios from 'axios';

const MusicUploadForm = ({musicList,setMusicList}) => {

    
    let musicObj = {
        artistName:'',
        songName:'',
        trackNumber:'',
        src:'',
        isFavorite:false
    }
    // putting the uploaded file in the uploadedMusic variable
    const [uploadedMusic,setUploadedMusic] = useState('');
    // turning on and off the view of the upload form
    const [uploadDisplay,setUploadDisplay] = useState(false);
    // collecting the input data and inserting it in the musicData object
    const [musicData,setMusicData] = useState(musicObj);
    // using this state to show the upload progress
    const [progress,setProgress] = useState({started:false,pc:0});

    //form handling function where we use FormData and axios for sending the data to the specified url
    function uploadFormHandler(e) {
        e.preventDefault();
        setMusicList([...musicList,{...musicData,trackNumber:musicList.length + 1}])
        const audioForm = new FormData();
        audioForm.append('audio',uploadedMusic)
        setProgress(prevState => {
            return {...prevState,started:true}
        })
        axios.post('https://httpbin.org/post',audioForm, {
            onUploadProgress: (uploadProgress) => {
                setProgress(prevState => {
                    return {...prevState, pc:uploadProgress.progress*100}
                })
            }
        }).then(res => {
            console.log(res);
            setProgress({started:false,pc:0})
        })
    }
    
  return (
    <div>
        <div className='flex gap-2 font-mono items-center'>
            <p>Upload your own music </p>
            <button onClick={() => setUploadDisplay(!uploadDisplay)} className='border-2 w-14 h-4 flex items-center justify-center'>
                {uploadDisplay === false ? <img width={16} src={downArrow}/> : <img width={16} src={upArrow}/>}
            </button>
        </div>
        {uploadDisplay === true &&
        <form onSubmit={e => uploadFormHandler(e)} className='font-mono w-fit mt-6'>
        <div>
            <label>Song Name:
                <br />
                <input required onChange={e => setMusicData({...musicData,songName:e.target.value})} type='text' placeholder='Song name' className='border-2 pl-2 rounded mt-2 mb-4'/>
            </label>
        </div>
        <div>
            <label>Artist Name:
                <br />
                <input required onChange={e => setMusicData({...musicData,artistName:e.target.value})} type='text' placeholder='Artist name' className='border-2 pl-2 rounded mt-2 mb-4' />
            </label>
        </div>
        <div>
            <label>Upload Music:
                <br />
                <input required className='mt-2 mb-4' onChange={(e) => {
                setUploadedMusic(e.target.files[0])
                }}  type='file' accept='audio/mp3,audio/wav'/>
            </label>
        </div>
        {progress.started && <progress max='100' value={progress.pc}></progress>}
        <br />
        <button className='border-2 w-[200px] hover:bg-gray-300 hover:text-white hover:font-extrabold px-4 rounded'>Upload</button>
    </form>}
    </div>
  )
}

export default MusicUploadForm