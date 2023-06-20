import React from 'react'
import '../../styles/SongInfo/overview.scss'
import MusicVideo from './Overview/MusicVideo'
import ArtistTopSongs from './Overview/ArtistTopSongs'
import useTopArtist from '../hooks/useTopArtist'

function SongOverview({ info, video, showOverview }) {
  const { top } = useTopArtist(info.artists[0].adamid)

  return (
    <section className={showOverview ? 'overview' : 'overview hide'}>
      {video && <MusicVideo  video={video} /> }
      {top && <ArtistTopSongs info={info} top={top} />}
    </section>
  )
}

export default SongOverview