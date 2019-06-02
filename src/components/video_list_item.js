import React from 'react';

const VideoListItem=({video,onVideoSelect})=>{
    const imgUrl=video.snippet.thumbnails.default.url;
    return(
        <li className="list-group-item list-group-item-action mb-3" onClick={(event)=>{
            onVideoSelect(event,video);
        }}>
            <div className="media">
                <div className="media-left mr-4">
                    <img className="d-flex img-fluid media-object" src={imgUrl} alt={video.snippet.title}/>
                </div>
                
                <div className="media-body">
                    <h3 className="media-heading lead">{video.snippet.title}</h3>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;