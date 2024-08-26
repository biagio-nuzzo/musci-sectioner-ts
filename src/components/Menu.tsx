// React
import { useState } from "react";

// Types
import { MenuProps } from "../types";

// Styles
import Style from "../App.module.css";

const Menu = ({
  section,
  setShow,
  restart,
  pauseVideo,
  setAdding,
  setShowVideo,
  setAddingVideo,
  isPaused,
  fullScreenToogle,
}: MenuProps) => {
  // States
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className={Style.menuContainer}>
      <div className={Style.toggleButton} onClick={() => setShow(true)}>
        Mostra sezioni
      </div>
      <div className={Style.toggleButton} onClick={() => setShowVideo(true)}>
        Mostra video
      </div>
      <div className={Style.toggleButton} onClick={() => setAdding(true)}>
        Aggiungi sezione
      </div>
      <div className={Style.toggleButton} onClick={() => setAddingVideo(true)}>
        Aggiungi video
      </div>
      <div
        className={Style.toggleButton}
        onClick={() => {
          if (fullScreen) {
            fullScreenToogle.exit();
            setFullScreen(false);
          } else {
            fullScreenToogle.enter();
            setFullScreen(true);
          }
        }}
      >
        {fullScreen ? "Exit Full Screen" : "Full Screen"}
      </div>

      <div
        className={Style.toggleButton}
        onClick={() => {
          pauseVideo(isPaused);
        }}
      >
        {isPaused ? "Play" : "Pause"}
      </div>
      {section ? (
        <div className={Style.toggleButton} onClick={restart}>
          Restart
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menu;
