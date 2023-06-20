import React from 'react'
import SongPreview from '../SongInfo/SongPreview'
import { useLocation } from 'react-router-dom'
import useSongInfo from '../hooks/useSongInfo'
import useColor from '../hooks/useColor'
import useSections from '../hooks/useSections'
import SongSummary from '../SongInfo/SongSummary'
import bgImg from '../../images/nakrilo.jpg'

function SongInfo() {
  const location = useLocation()
  const { info } = useSongInfo(location.state.songKey)
  const { gradient } = useColor(info?.images, bgImg)
  const { song, video, lyrics } = useSections(info?.sections)

  return (
    <>
      {song && <SongPreview info={info} song={song} gradient={gradient}/> }
      {song && <SongSummary info={info} video={video} lyrics={lyrics} /> }
    </>
  )
}

export default SongInfo