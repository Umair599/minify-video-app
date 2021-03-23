import React, {useState, useEffect} from 'react'
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App=()=>{
  
  const [selectedVideo, setSelectedVideo]=useState(null);
  const [videos, search]= useVideos('buildings');
  useEffect(()=>{
    setSelectedVideo(videos[0]);  
  },[videos]);
  

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
     <SearchBar onSubmit={search}/>
     {videos.length} Videos Found
     <div className="ui grid">
       <div className="ui row"> <div className="eleven wide column"><VideoDetail video={selectedVideo}/></div>
    <div className="five wide column"><VideoList onVideoSelect={(video)=>setSelectedVideo(video)} videos={videos}/></div> </div>
     </div>
    </div>
  );
}

export default App;
