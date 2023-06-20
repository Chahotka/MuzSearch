import React from 'react'
import '../../styles/SongInfo/show-buttons.scss'

function ShowButtons({ showLyrics, showOverview, setShowLyrics, setShowOverview }) {
  const showHandler = (e) => {
    if (e.target.id === 'lyric') {
      setShowLyrics(true)
      setShowOverview(false)
    } else {
      setShowLyrics(false)
      setShowOverview(true)
    }
  }


  return (
    <section className="buttons">
      <div className="buttons__container container">
        <div className="buttons__body">
          <div className="buttons__button">
              <button  
              id="overw" 
              onClick={(e) => showHandler(e)}
              className={showOverview ? "buttons__overview btn active" : "buttons__overview btn"}
            >
              Overview
            </button>
            <div id="bar1" className={showOverview ? 'active' : ''}></div>
          </div>
          <div className="buttons__button">
            <button  
              id="lyric" 
              onClick={(e) => showHandler(e)}
              className={showLyrics ? "buttons__lyrics btn active" : "buttons__lyrics btn"}
            >
              Lyrics
            </button>
            <div id="bar2" className={showLyrics ? 'active' : ''}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowButtons