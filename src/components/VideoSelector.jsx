import React from 'react';

const VideoSelector = ({ selectedVideo, onVideoChange, videos }) => {
  return (
    <div className="video-selector">
      <select 
        value={selectedVideo} 
        onChange={(e) => onVideoChange(e.target.value)}
        className="px-3 py-2 border rounded-md"
      >
        {videos.map((video, index) => (
          <option key={index} value={video.path}>
            {video.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VideoSelector; 