import React from 'react'
import '../styles/YoutubePlayer.css';
function YoutubePlayer({href}) {
    console.log(href)
  return (
    <div className='youtubePlayer'>
<iframe 
width="942" 
height="530"
 src={href}
 title="YouTube video player"
 ></iframe>
    </div>
  )
}

export default YoutubePlayer;