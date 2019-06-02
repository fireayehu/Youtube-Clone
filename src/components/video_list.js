import React from 'react';
import VideoListItem from './video_list_item';
const VideoList =({videos,onVideoSelect})=>{
    return(
        <ul className="col-md-4 list-group">
           {videos.map((video,index)=>{
               return(
                   <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video}/>
               );
           })}
        </ul>
    );
};
export default VideoList;