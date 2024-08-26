// React
import { useEffect, useMemo } from "react";

// Types
import { VideoPlayerProps } from "../types";

// Libraries
import YouTube, { YouTubePlayer } from "react-youtube";

// Components
import Menu from "./Menu";

// Styles
import Style from "../App.module.css";

let videoElement: YouTubePlayer = null;

const VideoPlayer = ({
  sectionList,
  section,
  isPaused,
  setIsPaused,
  setShow,
  setAdding,
  setShowVideo,
  setAddingVideo,
  video,
  videoList,
  fullScreenToogle,
}: VideoPlayerProps) => {
  // Options for the video player
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      start: sectionList?.[section]?.start || 0,
      end: sectionList?.[section]?.end,
      allow: "autoplay; fullscreen",
      loop: 0,
      controls: 0,
      fs: 0,
      hl: 0,
      modestbranding: 0,
      rel: 0,
    },
  };
  const videoId = videoList[video]?.id || "";

  // Function to restart the section
  const handleRestartSection = () => {
    if (videoElement) {
      videoElement.target.seekTo(sectionList[section].start, true);
      videoElement.target.playVideo();
    }
  };

  // Function to pause or play the video
  const handleToggleVideo = (isPaused: boolean) => {
    if (isPaused) {
      videoElement.target.playVideo();
      setIsPaused(false);
    } else {
      if (videoElement) {
        videoElement.target.pauseVideo();
      }
      setIsPaused(true);
    }
  };

  // Function to get the video element
  const _onReady = (event: YouTubePlayer) => {
    videoElement = event;
  };

  // Function to pause or play the video
  useEffect(() => {
    if (videoElement && section) {
      if (isPaused) {
        videoElement.target.pauseVideo();
      } else {
        videoElement.target.playVideo();
      }
    }
  }, [isPaused, videoElement]);

  // Function to check if the video has reached the end of the section
  useEffect(() => {
    const interval = setInterval(async () => {
      if (videoElement && videoElement.target.getCurrentTime() > 0) {
        const elapsed_seconds = videoElement.target.getCurrentTime();
        if (elapsed_seconds >= (sectionList?.[section]?.end || 0)) {
          videoElement.target.pauseVideo();
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [section, sectionList]);

  // Update the options when the section changes
  const options = useMemo(() => {
    const updatedOpts = {
      ...opts,
      playerVars: {
        ...opts.playerVars,
        start: sectionList?.[section]?.start || 0,
        end: sectionList?.[section]?.end || 0,
      },
    };
    return updatedOpts;
  }, [section]);

  return (
    <div className={Style.videoPlayer}>
      <YouTube videoId={videoId} opts={options} onReady={_onReady} />
      <Menu
        setShow={setShow}
        restart={handleRestartSection}
        setAdding={setAdding}
        section={section}
        setShowVideo={setShowVideo}
        setAddingVideo={setAddingVideo}
        pauseVideo={handleToggleVideo}
        isPaused={isPaused}
        fullScreenToogle={fullScreenToogle}
      />
    </div>
  );
};

export default VideoPlayer;
