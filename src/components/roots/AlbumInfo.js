import React from 'react'
import AlbumPreview from '../Album/AlbumPreview'
import { useLocation } from 'react-router'
import useArtistColor from '../hooks/useArtistColor'
import AlbumSongs from '../Album/AlbumSongs'
import useAlbum from '../hooks/useAlbum'

function AlbumInfo() {
  const location = useLocation()
  const { album } = useAlbum(location.state.albumID)
  const { url, gradient } = useArtistColor(album?.attributes.artwork?.url)

  // cmp albumosng received adamid nado tuda zakinut'

  return (
    <>
      {album && <AlbumPreview album={album} url={url} gradient={gradient}/> }
      {album && <AlbumSongs album={album} adamid={location.state.adamid}/> }
    </>
  )
}

export default AlbumInfo