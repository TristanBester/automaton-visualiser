import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import VideoSelector from './VideoSelector';

interface ResizableVideoProps {
  selectedVideo: string;
  onVideoChange: (path: string) => void;
  videos: { name: string; path: string; }[];
  videoRef: React.RefObject<HTMLVideoElement>;
  onError: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export function ResizableVideo({ 
  selectedVideo, 
  onVideoChange, 
  videos, 
  videoRef, 
  onError 
}: ResizableVideoProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed left-4 top-4 z-[1000]">
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="mb-2 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-gray-50"
      >
        {isVisible ? 'Hide Video' : 'Show Video'}
        <span className="text-gray-500">
          {isVisible ? '▼' : '▶'}
        </span>
      </button>

      {isVisible && (
        <ResizableBox
          width={384}
          height={300}
          minConstraints={[300, 200]}
          maxConstraints={[800, 600]}
          resizeHandles={['se']}
        >
          <div className="h-full w-full bg-white rounded-lg shadow-lg p-4">
            <VideoSelector 
              selectedVideo={selectedVideo}
              onVideoChange={onVideoChange}
              videos={videos}
            />
            <video
              ref={videoRef}
              src={selectedVideo}
              className="w-full mt-2 rounded-md"
              style={{ height: 'calc(100% - 50px)' }}
              controls
              onError={onError}
              playsInline
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ResizableBox>
      )}
    </div>
  );
} 