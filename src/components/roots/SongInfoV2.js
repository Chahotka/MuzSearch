import React from 'react'
import { useLocation } from 'react-router-dom'
import useSongInfoV2 from '../hooks/useSongInfoV2'
import useArtistColor from '../hooks/useArtistColor'
import SongPreviewV2 from '../SongInfoV2/SongPreviewV2'
import SongSummaryV2 from '../SongInfoV2/SongSummaryV2'
import useAlbum from '../hooks/useAlbum'

function SongInfo() {
  const location = useLocation()
  const { info } = useSongInfoV2(location.state.songID)
  const { album } = useAlbum(info?.relationships.albums.data[0].id);
  const { url, gradient } = useArtistColor(info?.attributes.artwork.url)

  return (
    <>
      {info && <SongPreviewV2 info={info} url={url} gradient={gradient} /> }
      {album && <SongSummaryV2 album={album} /> }
    </>
  )
}

export default SongInfo