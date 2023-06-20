import React from 'react'
import bgImg from '../../images/nakrilo.jpg'

function ArtistPreview({ artist, url, gradient }) {

  
  return (
    <section style={{background: gradient}} className="preview">
      <div className="preview__container container">
        <div className="preview__body">
          <img 
            style={{borderRadius: '50%'}}
            className='preview__image'
            src={url || bgImg}
          />
          <div className="preview__desc">
            <span></span>
            <h2 className='preview__name'>{ artist.attributes.name }</h2>
            <h3 className='preview__album'>{ artist.attributes.genreNames[0]}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtistPreview