import React from 'react';
import { Facebook } from 'react-content-loader'
const VideoListLoader =(props)=>{
    let videos=[1,2,3,4,5,6]
    return(
        <ul className="col-md-4 list-group">
           {videos.map((video,index)=>{
               return(
                <div className="mb-3">
                    <Facebook />
                </div>
               );
           })}
        </ul>
    );
};
export default VideoListLoader;