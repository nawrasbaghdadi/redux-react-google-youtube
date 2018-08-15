import VideoList from '../ui/videosListComponent'
import {videoLike} from'../../actions'
import { connect } from 'react-redux'


const mapStateToProps = (state) => { 
    return {
        "videos":state.allVideos.videoList,
        "fetching" : state.allVideos.fetching,
        "numberOfLikes": state.numberOfLikes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onVideoLike(videoId){
            dispatch(
                videoLike(videoId)
            )
        }
    }
}
const Container = connect(mapStateToProps,mapDispatchToProps)(VideoList)
export default Container;

