import React from 'react'
import '../../../styles/SongInfo/Overview/music-video.scss'
import youtubeLogo from '../../../images/youtube.svg'

function MusicVideo({ video }) {

  return (
    <div className='video'>
      <div className="video__body">
        <h2 className="video__title">Music video</h2>
        <div className="video__vid">
          <a href={video.actions[0].uri} className='video__link' target='_blank'>
            <img href={video.actions[0].uri} src={youtubeLogo} className='video__logo'  />
          </a>
          <img src={video.image.url} className='video__thumb' />
        </div>
      </div>
    </div>
  )
}

export default MusicVideo