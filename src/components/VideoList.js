
import React from 'react';
import VideoItem from './VideoItem.js';
const VideoList=({videos, onVideoSelect})=>{
    const mvideos=videos.map((video)=>{
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
    });
    return <div className="ui relaxed divided list">
        {mvideos}
    </div>
}
export default VideoList;