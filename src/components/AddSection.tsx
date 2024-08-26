import { useState } from "react";

// Types
import { AddSectionProps } from "../types";

// Styles
import Style from "../App.module.css";

const AddSection = ({
  setSectionList,
  adding,
  setAdding,
  video,
  videoList,
}: AddSectionProps) => {
  // States
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  // Function to add a new section
  const handleAddSection = () => {
    if (title && start && end) {
      const videoId = videoList[video].id;

      setSectionList((prev) => [...prev, { title, start, end, videoId }]);
      setAdding(false);
      setTitle("");
      setStart(0);
      setEnd(0);
    }
  };

  return (
    <>
      {adding && (
        <div className={Style.addSectionMenu}>
          <p>Aggiungi Sezione</p>
          <div
            className={Style.toggleButton}
            onClick={() => {
              setAdding(false);
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
            <label>Start</label>
            <input
              type="number"
              placeholder="Inizio"
              value={start}
              onChange={(e) => {
                setStart(parseInt(e.target.value));
              }}
            />
            <label>End</label>
            <input
              type="number"
              placeholder="Fine"
              value={end}
              onChange={(e) => {
                setEnd(parseInt(e.target.value));
              }}
            />
            <div
              className={Style.toggleButton}
              onClick={() => {
                handleAddSection();
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
export default AddSection;
