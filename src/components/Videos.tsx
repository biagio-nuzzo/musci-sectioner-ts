// Types
import { VideosProps, Video } from "../types";

// Styles
import Style from "../App.module.css";

const Videos = ({
  showVideo,
  setShowVideo,
  videoList,
  setVideo,
  video,
  removeVideo,
}: VideosProps) => {
  return (
    <>
      {showVideo && (
        <div className={Style.sectionList}>
          <div
            className={Style.toggleButton}
            onClick={() => {
              setShowVideo(false);
            }}
          >
            Nascondi sezioni
          </div>
          {videoList.map((item: Video, index: number) => {
            if (index) {
              return (
                <div
                  key={index}
                  style={
                    video === index
                      ? { backgroundColor: "lightblue", cursor: "initial" }
                      : { backgroundColor: "#ededed" }
                  }
                  className={Style.sectionCard}
                  onClick={() => {
                    setVideo(index);
                  }}
                >
                  <p>Titolo {item.title}</p>
                  <p>ID {item.id}</p>
                  <div
                    className={Style.toggleButton}
                    onClick={() => {
                      removeVideo(index);
                    }}
                  >
                    Cancella
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default Videos;
