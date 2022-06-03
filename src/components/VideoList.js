import React from 'react'; 
import VideoItem from './VideoItem';


const VideoList= ({videoList, onVideoSelect}) => {
 
  const renderedList= videoList.map(video=>{
    return <div> <VideoItem id={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/> </div>
  });
     return <div className="ui list">{renderedList}</div>
};

export default VideoList;