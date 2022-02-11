import React from "react";
import "../styles/videoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videosRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •
          <span className="videosRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
