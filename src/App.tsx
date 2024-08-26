// React
import { useState, useEffect } from "react";

// Libraries
import { YouTubePlayer } from "react-youtube";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// Components
import VideoPlayer from "./components/VideoPlayer";
import Sections from "./components/Sections";
import AddSection from "./components/AddSection";
import Videos from "./components/Videos";
import AddVideo from "./components/AddVideo";

// Types
import { Section, Video } from "./types";

// Styles
import Style from "./App.module.css";

// Initial video element
let videoElement: YouTubePlayer = null;

// Constants for the sections of the video
const initialSectionList = [{ title: "Empty Item", start: 0, end: 0 }];
const initialVideoList = [
  { title: "Empty Item", id: "" },
  {
    title: "Idea 7",
    id: "IIfUSdSbJaw",
  },
];

function App() {
  const handle = useFullScreenHandle();

  // Recupera dati dal local storage
  const dataSection = localStorage.getItem("sectionList") || null;
  const dataSectionJson = dataSection ? JSON.parse(dataSection) : null;

  const dataVideo = localStorage.getItem("videoList") || null;
  const dataVideoJson = dataVideo ? JSON.parse(dataVideo) : null;

  // States
  const [isPaused, setIsPaused] = useState(false);
  const [section, setSection] = useState<number>(0);
  const [video, setVideo] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [adding, setAdding] = useState(false);
  const [addingVideo, setAddingVideo] = useState(false);
  const [sectionList, setSectionList] = useState<Section[]>(
    dataSectionJson || initialSectionList
  );
  const [videoList, setVideoList] = useState<Video[]>(
    dataVideoJson || initialVideoList
  );

  // Function to set the section
  const _setSection = (index: number) => {
    setIsPaused(true); // Ensure the video plays when a new section is selected
    setSection(index);
  };

  // Function to remove a section
  const removeSection = (index: number) => {
    setSectionList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      return newList;
    });
    setIsPaused(true);
  };

  const removeVideo = (index: number) => {
    setSection(0);
    setVideoList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      return newList;
    });
    setIsPaused(true);
  };

  const _setVideo = (index: number) => {
    setVideo(index);
  };

  // Update the local storage
  useEffect(() => {
    localStorage.setItem("sectionList", JSON.stringify(sectionList));
    setSection(0);
    setIsPaused(true);
  }, [sectionList]);

  // Update the local storage
  useEffect(() => {
    localStorage.setItem("videoList", JSON.stringify(videoList));
    setVideo(0);
    setIsPaused(true);
  }, [videoList]);

  return (
    <FullScreen handle={handle}>
      <div className={Style.mainContainer}>
        {/* Component with the video player */}
        <VideoPlayer
          sectionList={sectionList}
          section={section as number}
          isPaused={isPaused}
          restartSection={() => _setSection(section as number)}
          show={show}
          setShow={setShow}
          setAdding={setAdding}
          setShowVideo={setShowVideo}
          setAddingVideo={setAddingVideo}
          video={video}
          videoList={videoList}
          setIsPaused={setIsPaused}
          fullScreenToogle={handle}
        />
        {/* Component with the sections */}
        <Sections
          sectionList={sectionList}
          setSection={_setSection}
          show={show}
          setShow={setShow}
          section={section}
          removeSection={removeSection}
          videoId={videoList[video]?.id}
        />
        <Videos
          videoList={videoList}
          setVideo={_setVideo}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          video={video}
          removeVideo={removeVideo}
        />
        <AddSection
          setSectionList={setSectionList}
          adding={adding}
          setAdding={setAdding}
          video={video}
          videoList={videoList}
        />
        <AddVideo
          setVideoList={setVideoList}
          addingVideo={addingVideo}
          setAddingVideo={setAddingVideo}
        />
      </div>
    </FullScreen>
  );
}

export default App;
