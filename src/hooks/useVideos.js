import {useState, useEffect} from 'react';
import youtube from '../api/youtube';
const KEY='AIzaSyCp4RRt-VBIDchq6VWr0Z_K_8pd_DIYGw8';
const useVideos=(defaultSearchTerm)=>{
    const [videos, setVideos]=useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
      },[defaultSearchTerm]);
      const search=async (term)=>{
        const response = await youtube.get('/search',{
           params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
          
        });
        setVideos(response.data.items);
      }
      //Javascript convention return {videos, onSearchSubmit};
      return [videos, search];
};
export default useVideos;