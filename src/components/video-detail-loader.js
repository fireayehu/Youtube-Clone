import React from 'react';
import { List,Instagram } from 'react-content-loader'
const VideoDetailLoader =(props)=>{
    return(
        <div className="video-detail col-md-8">
            <div className="mb-3">
                <Instagram />
                <List />
            </div>
        </div>
    );
};
export default VideoDetailLoader;