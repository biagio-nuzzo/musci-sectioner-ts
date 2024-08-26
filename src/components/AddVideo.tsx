import { useState } from "react";

// Types
import { AddVideoProps } from "../types";

// Styles
import Style from "../App.module.css";

const AddVideo = ({
  setVideoList,
  addingVideo,
  setAddingVideo,
}: AddVideoProps) => {
  // States
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  // Function to add a new section
  const handleAddVideo = () => {
    if (title && id) {
      const videoId = getVideoId(id);
      setVideoList((prev) => [...prev, { title: title, id: videoId }]);
      setAddingVideo(false);
      setTitle("");
      setId("");
    }
  };

  const getVideoId = (url: string) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v") || "";
  };

  return (
    <>
      {addingVideo && (
        <div className={Style.addSectionMenu}>
          <p>Aggiungi Sezione</p>
          <div
            className={Style.toggleButton}
            onClick={() => {
              setAddingVideo(false);
            }}
          >
            Chiudi
          </div>
          <div>
            <div>
              <label>Titolo</label>
              <br />
              <input
                type="text"
                placeholder="Titolo"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Youtube Link</label>
              <br />
              <input
                type="string"
                placeholder="Inizio"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </div>
            <div
              className={Style.toggleButton}
              onClick={() => {
                handleAddVideo();
              }}
            >
              Aggiungi
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddVideo;
