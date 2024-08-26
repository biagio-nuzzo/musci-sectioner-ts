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
      setVideoList((prev) => [...prev, { title, id }]);
      setAddingVideo(false);
      setTitle("");
      setId("");
    }
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
            <label>Titolo</label>
            <input
              type="text"
              placeholder="Titolo"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>Id</label>
            <input
              type="string"
              placeholder="Inizio"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
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
