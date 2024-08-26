export type Section = {
  title: string;
  start: number;
  end: number;
  title?: string;
  videoId: string;
};

export type VideoPlayerProps = {
  sectionList: Section[];
  section: number;
  isPaused: boolean;
  restartSection: () => void;
  show: boolean;
  setShow: (show: boolean) => void;
  setAdding: (adding: boolean) => void;
  setShowVideo: (show: boolean) => void;
  setAddingVideo: (adding: boolean) => void;
  video: number;
  videoList: Video[];
  setIsPaused: (paused: boolean) => void;
  fullScreenToogle: any;
};

export type SectionsProps = {
  sectionList: Section[];
  show: boolean;
  setShow: (show: boolean) => void;
  section: number;
  setSection: (index: number) => void;
  removeSection: (index: number) => void;
  videoId: string;
};

export type MenuProps = {
  setShow: (show: boolean) => void;
  setShowVideo: (show: boolean) => void;
  setAddingVideo: (adding: boolean) => void;
  restart: () => void;
  setAdding: (adding: boolean) => void;
  section: number;
  pauseVideo: (isPaused: boolean) => void;
  isPaused: boolean;
  fullScreenToogle: any;
};

export type AddSectionProps = {
  setSectionList: React.Dispatch<React.SetStateAction<Section[]>>;
  adding: boolean;
  setAdding: React.Dispatch<React.SetStateAction<boolean>>;
  video: number;
  videoList: Video[];
};

export type AddVideoProps = {
  setVideoList: React.Dispatch<React.SetStateAction<Video[]>>;
  addingVideo: boolean;
  setAddingVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Video = {
  id: string;
  title: string;
};

export type VideosProps = {
  videoList: Video[];
  setVideo: (index: number) => void;
  showVideo: boolean;
  setShowVideo: (show: boolean) => void;
  video: number;
  removeVideo: (index: number) => void;
};
