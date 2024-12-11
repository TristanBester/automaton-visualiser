import React, { useState, useRef, useEffect } from 'react';
import VideoSelector from './components/VideoSelector';

function App() {
  const videoRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState('/videos/1_1_1.mp4');
  const videos = [
    { name: 'Video 1', path: '/videos/1_1_1.mp4' },
    { name: 'Video 2', path: '/videos/3_3_3.mp4' }
  ];

  const handleVideoError = (e) => {
    console.error('Error loading video:', e);
    console.error('Video source:', e.target.src);
  };

  useEffect(() => {
    console.log('Current video path:', selectedVideo);
    console.log('Video element:', videoRef.current);
  }, [selectedVideo]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 w-96">
        <VideoSelector 
          selectedVideo={selectedVideo}
          onVideoChange={setSelectedVideo}
          videos={videos}
        />
        <video
          ref={videoRef}
          src={selectedVideo}
          className="w-full mt-2 rounded-md"
          controls
          onError={handleVideoError}
          playsInline
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App; 