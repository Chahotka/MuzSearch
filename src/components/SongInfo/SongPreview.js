import React from 'react'
import '../../styles/SongInfo/song-preview.scss'
import { Link } from 'react-router-dom'
import bgImg from '../../images/nakrilo.jpg'

function SongPreview({ info, song, gradient }) {

  return (
    <section style={{background: gradient}} className="preview">
      <div className="preview__container container">
        <div className="preview__body">
          <img 
            className='preview__image'
            src={ info.images ?
              info.images.coverart ||
              info.images.background ||
              bgImg : bgImg
            } 
            alt="Song coverart" 
          />
          <div className="preview__desc">
            <h3 
              className='preview__album' 
            >
              { song.metadata[0].text }
            </h3>
            <h2 className='preview__name'>
              { info.title }
            </h2>
            <Link 
              className='preview__artist' 
              to={info.artists && `/artist/${info.artists[0].adamid}`}
              state={info.artists && {adamid: info.artists[0].adamid}}
            >
              { info.subtitle }
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SongPreview