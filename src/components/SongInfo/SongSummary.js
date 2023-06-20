import React, { useState } from 'react'
import '../../styles/SongInfo/summary.scss'
import SongOverview from './SongOverview'
import SongLyrics from './Lyrics/SongLyrics'
import ShowButtons from './ShowButtons'

function SongSummary({ info, video, lyrics }) {
  const [showLyrics, setShowLyrics] = useState(false)
  const [showOverview, setShowOverview] = useState(true)

  return (
    <section className='summary'>
      <div className="summary__container container">
        <ShowButtons 
          showLyrics={showLyrics}
          showOverview={showOverview}
          setShowLyrics={setShowLyrics}
          setShowOverview={setShowOverview}
        />
        <SongOverview 
          info={info}
          video={video}
          showOverview={showOverview}
        />
        
        <SongLyrics 
          lyrics={lyrics}
          showLyrics={showLyrics}
        />
      </div>
    </section>
  )
}

export default SongSummary