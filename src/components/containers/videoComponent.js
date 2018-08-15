import {videoLike} from'../../actions'
import { connect } from 'react-redux'
import VideoComponent from '../ui/videoComponent'


const mapStateToProps = (state) => { 
    return {
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
const Container = connect(mapStateToProps,mapDispatchToProps)(VideoComponent)
export default Container;
