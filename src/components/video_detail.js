import React from 'react';
import VideoDetailLoader from './video-detail-loader';
const VideoDetail=({video})=>{
    if(!video){
        return(
           <VideoDetailLoader/>
        );
    }
    let videoid=video.id.videoId;
    let url=`http://www.youtube.com/embed/${videoid}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={video.snippet.title} src={url}></iframe>
            </div>
            <div className="video-detail">
                <div className="h2 text-secondary p-3">{video.snippet.title}</div>
                <div className="lead p-3">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;