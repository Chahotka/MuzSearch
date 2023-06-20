import React, { useEffect, useState } from 'react'

function useAlbumSong(id) {
  const [song, setSong] = useState()

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  }

  useEffect(() => {
    fetch('http://localhost:8000/album/song', options)
      .then(res => res.json())
      .then(res => setSong(res.data[0]))
  }, [id])

  return { song }
}

export default useAlbumSong