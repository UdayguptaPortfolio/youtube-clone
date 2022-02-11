import React from "react";
import "../styles/sidebar.css";
import {Link} from 'react-router-dom';
import SidebarRow from "./sidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibrarayIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to='/'><SidebarRow selected title="Home" Icon={HomeIcon} /></Link>
      <Link to='/trending'><SidebarRow title="Trending" Icon={WhatshotIcon} /></Link>
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrarayIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
