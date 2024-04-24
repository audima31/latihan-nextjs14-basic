"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const ReactYoutube = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    height: "390",
    width: "100%",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  return (
    <div>
      <YouTube
        videoId={youtubeId}
        onReady={(e) => e.target.playVideo()}
        opts={option}
      />
      {/* {isOpen ? (
        <>
          <button onClick={handleCloseButton}>X</button>
          <YouTube
            videoId={youtubeId}
            onReady={(e) => e.target.playVideo()}
            opts={option}
          />
        </>
      ) : (
        <>
          <button onClick={handleCloseButton}>Tonton Trailler</button>
        </>
      )} */}
    </div>
  );
};

export default ReactYoutube;
