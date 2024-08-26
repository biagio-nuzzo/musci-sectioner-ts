// Types
import { SectionsProps, Section } from "../types";

// Styles
import Style from "../App.module.css";

const Sections = ({
  sectionList,
  setSection,
  show,
  setShow,
  section,
  removeSection,
  videoId,
}: SectionsProps) => {
  return (
    <>
      {show && (
        <div className={Style.sectionList}>
          <div
            className={Style.toggleButton}
            onClick={() => {
              setShow(false);
            }}
          >
            Nascondi sezioni
          </div>
          {sectionList.map((item: Section, index: number) => {
            if (index && item.videoId === videoId) {
              return (
                <div
                  key={item.title}
                  style={
                    section === index
                      ? { backgroundColor: "lightblue", cursor: "initial" }
                      : { backgroundColor: "#ededed" }
                  }
                  className={Style.sectionCard}
                  onClick={() => {
                    setSection(index);
                  }}
                >
                  <p>Titolo {item.title}</p>
                  <p>Start: {item.start}</p>
                  <p>End: {item.end}</p>
                  <div
                    className={Style.toggleButton}
                    onClick={() => {
                      removeSection(index);
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
export default Sections;
