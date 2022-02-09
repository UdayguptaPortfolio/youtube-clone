import React from 'react';
import '../styles/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from'@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <MenuIcon/>
        <img 
        className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt='youtube'/>
    </div>

        <div className='header__input'>
        <input type="text" placeholder='Search' />
        <SearchIcon className='header__inputButton'/>    
        </div>   
    
    <div className='header__icons'>
    <VideoCallIcon className='header__icon' />
    <AppIcon className='header__icon'/>
    <NotificationIcon className='header__icon'/>
    <Avatar
    alt="Uday Gupta"
    src="https://yt3.ggpht.com/yti/APfAmoFkj6GEPJKzLBweFS6SOkUvwyZnVHet_lbFGkSqww=s88-c-k-c0x00ffffff-no-rj-mo"
    />
    </div>
    
    </div>
  )
}

export default Header;