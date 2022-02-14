import React from 'react'
import '../styles/youtubePlayer.css';
function YoutubePlayer() {
    console.log(localStorage.getItem('href'));
  return (
    <div className='youtubePlayer'>
<iframe 
width="942" 
height="530"
 src={localStorage.getItem('href')}
 title="YouTube video player"
 ></iframe>
    </div>
  )
}

export default YoutubePlayer;