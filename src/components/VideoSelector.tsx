import React from "react";

interface Video {
  name: string;
  path: string;
}

interface VideoSelectorProps {
  selectedVideo: string;
  onVideoChange: (path: string) => void;
  videos: Video[];
}

export const VideoSelector = ({
  selectedVideo,
  onVideoChange,
  videos,
}: VideoSelectorProps) => {
  return (
    <select
      value={selectedVideo}
      onChange={(e) => onVideoChange(e.target.value)}
      className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {videos.map((video) => (
        <option key={video.path} value={video.path}>
          {`Animation ${video.name}`}
        </option>
      ))}
    </select>
  );
};
