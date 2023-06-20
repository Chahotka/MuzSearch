import React from 'react'
import '../../styles/SongInfo/song-preview.scss'
import { Link } from 'react-router-dom'
import bgImg from '../../images/nakrilo.jpg'

function SongPreviewV2({ info, song, url, gradient }) {

  return (
    <section style={{background: gradient}} className="preview">
      <div className="preview__container container">
        <div className="preview__body">
          <img 
            className='preview__image'
            src={url} 
            alt="Song coverart" 
          />
          <div className="preview__desc">
            <h3 
              className='preview__album' 
            >
              { info.attributes.albumName }
            </h3>
            <h2 className='preview__name'>
              { info.attributes.name }
            </h2>
            <Link 
              className='preview__artist' 
              to={info.relationships && `/artist/${info.relationships.artists.data[0].id}`}
              state={info.relationships && {adamid: info.relationships.artists.data[0].id}}
            >
              { info.attributes.artistName }
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SongPreviewV2