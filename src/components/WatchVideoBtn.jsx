import { BiPlayCircle } from "react-icons/bi";

const WatchVideoBtn = () => {
  return (
    <div className="btn-wrap pt-[11px] max-w-[200px] pl-3 block">
      <a href="#" className="watch-video">
        <BiPlayCircle size={"24px"} className="mr-[14px]" /> Watch Video
      </a>
    </div>
  );
};

export default WatchVideoBtn;
