import React, { useEffect, useState } from 'react'

function useAlbum(albumID) {
  const [album, setAlbum] = useState(null)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({albumID})
  }

  useEffect(() => {
    fetch('http://localhost:8000/album', options)
      .then(res => res.json())
      .then(res => setAlbum(res?.data[0]))
  }, [albumID])

  return { album }
}

export default useAlbum