import React  from 'react';
import PropTypes from 'prop-types';
import '../../stylessheets/video.css'
const VideoComponent = ({ videoId='' , videoTitle='',description='' ,numberOfLikes=0, onVideoLike=f=>f }) =>
<div className="video">
        <iframe width="420" height="245"
        src={"https://www.youtube.com/embed/"+videoId}>
        </iframe>
        <div className="info"> 
        <h5>{videoTitle}  <p>number of likes {numberOfLikes}</p></h5>
       
        <p>{description}</p>
        <button  onClick={() => onVideoLike(videoId)} >Like this Video <span className="like"></span></button>
        </div>
</div>


VideoComponent.propTypes = {
    videoId: PropTypes.string,
    videoTitle : PropTypes.string,
    description : PropTypes.string,
    numberOfLikes : PropTypes.number,
    onVideoLike: PropTypes.func
}

export default VideoComponent