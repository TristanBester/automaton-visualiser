import React from 'react';

interface Video {
  name: string;
  path: string;
}

interface VideoSelectorProps {
  selectedVideo: string;
  onVideoChange: (path: string) => void;
  videos: Video[];
}

const VideoSelector = ({ selectedVideo, onVideoChange, videos }: VideoSelectorProps) => {
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