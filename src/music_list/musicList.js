import AfterHours from "../assets/tracks/TheWeekndAfterHours.mp3"
import tupachitemup from "../assets/tracks/2pachitemup.mp3"
import bobmarleythreelittlebirds from "../assets/tracks/bobmarleythreelittlebirds.mp3"
import eminemmockingbird from "../assets/tracks/eminemmockingbird.mp3"
import theweekndblindinglights from "../assets/tracks/theweekndblindinglights.mp3"
import eminemshady from "../assets/tracks/eminemshady.mp3"

// An array of music list

let musicListArray = [
    {songName:'Slim Shady',artistName:'Eminem',src:eminemshady,trackNumber:1, isFavorite:false},
    {songName:'Mockingbird',artistName:'Eminem',src:eminemmockingbird,trackNumber:2, isFavorite:false},
    {songName:'Hit em Up',artistName:'Tupac',src:tupachitemup ,trackNumber:3, isFavorite:true},
    {songName:'Blinding Lights',artistName:'The Weeknd',src:theweekndblindinglights,trackNumber:4, isFavorite:false},
    {songName:'After Hours',artistName:'The Weeknd',src: AfterHours ,trackNumber:5, isFavorite:false},
    {songName:'Three Little Birds',artistName:'Bob Marley',src:bobmarleythreelittlebirds,trackNumber:6, isFavorite:false}
]

export default musicListArray