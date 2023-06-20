import React from 'react'
import { useLocation } from 'react-router'
import useArtist from '../hooks/useArtist'
import ArtistPreview from '../Artist/ArtistPreview'
import useArtistColor from '../hooks/useArtistColor'
import ArtistAlbums from '../Artist/ArtistAlbums'

function ArtistInfo() {
  const location = useLocation()
  const { artist, album } = useArtist(location.state.adamid)
  const { url, gradient } = useArtistColor(artist?.attributes.artwork?.url)

  return (
    <>
      { artist && <ArtistPreview artist={artist} url={url} gradient={gradient} /> }
      { album && <ArtistAlbums album={album} adamid={location.state.adamid} /> }
    </>
  )
}

export default ArtistInfo