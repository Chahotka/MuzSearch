import React, { useEffect, useState } from 'react'

function useArtist(adamid) {
  const [artist, setArtist] = useState(null)
  const [album, setAlbum] = useState(null)

  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({adamid})
  }

  useEffect(() => {
    fetch('http://localhost:8000/artist', options)
      .then(res => res.json(res))
      .then(res => {
        setArtist(res.resources.artists[adamid])
        setAlbum(res.resources.albums)
      })
  }, [adamid])


  return { artist, album }
}

export default useArtist