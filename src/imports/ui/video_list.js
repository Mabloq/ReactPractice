import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  const list = videos.map((video) => {
     return <VideoListItem
       onVideoSelect={onVideoSelect}
       key={video.etag}
       video={video}/>
   });

    return(
      <div className="col-md-6 col-md-offset-3">
        {list}
      </div>


    );

};
 export default VideoList;
