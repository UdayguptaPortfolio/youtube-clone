import React, { useState } from "react";
import "../styles/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          value={inputSearch}
          type="text"
          placeholder="Search"
          onChange={(searchItem) => setInputSearch(searchItem.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <Avatar
          alt="Uday Gupta"
          src="https://yt3.ggpht.com/yti/APfAmoFkj6GEPJKzLBweFS6SOkUvwyZnVHet_lbFGkSqww=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
