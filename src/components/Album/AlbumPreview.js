import React from 'react'
import bgImg from '../../images/nakrilo.jpg'

function AlbumPreview({ album, url, gradient }) {

  return (
    <section style={{background: gradient}} className='preview'>
      <div className="preview__container container">
        <div className="preview__body">
          <img 
            className='preview__image'
            alt="album coverart" 
            src={url || bgImg}
          />
          <div className="preview__desc">
            <span></span>
            <h2 className="preview__name">{ album.attributes.name }</h2>
            <h3 className="preview__album">Tracks: { album.attributes.trackCount }</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlbumPreview