import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

interface ResizableVideoProps {
  selectedVideo: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  onError: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  isAnimating?: boolean;
}

export const ResizableVideo: React.FC<ResizableVideoProps> = ({
  selectedVideo,
  videoRef,
  onError,
  isAnimating = false,
}) => {
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });

  return (
    <div className="absolute left-4 top-4 z-10">
      <ResizableBox
        width={dimensions.width}
        height={dimensions.height}
        minConstraints={[300, 200]}
        maxConstraints={[800, 600]}
        onResize={(e, { size }) => {
          setDimensions({
            width: size.width,
            height: size.height,
          });
        }}
        resizeHandles={["se"]}
        handle={
          <div className="absolute bottom-0 right-0 h-4 w-4 cursor-se-resize rounded-bl bg-gray-200 opacity-75" />
        }
      >
        <div
          className="h-full w-full overflow-hidden rounded-lg bg-white p-4 shadow-lg"
          style={{
            width: dimensions.width - 16, // Adjust for padding
            height: dimensions.height - 16,
          }}
        >
          <video
            ref={videoRef}
            src={selectedVideo}
            controls={!isAnimating}
            className="h-full w-full rounded-md"
            onError={onError}
          />
        </div>
      </ResizableBox>
    </div>
  );
};
