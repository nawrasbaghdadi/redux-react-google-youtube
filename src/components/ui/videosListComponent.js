import React  from 'react';
import PropTypes from 'prop-types';
import VideoComponent from '../ui/videoComponent'

const VideoList = ({videos={} ,fetching=false,  onVideoLike=f=>f}) => 
    <div className="video-list">
    {(fetching) ? <div className="loading"></div> : null }
    {videos.map((video, i) =>
         <VideoComponent key={i} videoId={video.id.videoId} videoTitle={video.snippet.title} description={video.snippet.description} numberOfLikes={video.numberOfLikes} onVideoLike={onVideoLike} />
    )}
    </div>


VideoList.propTypes = {
        onVideoLike : PropTypes.func,
        videos: PropTypes.array
}
    
export default VideoList