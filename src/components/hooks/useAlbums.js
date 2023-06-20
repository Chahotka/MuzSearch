import React, { useEffect, useState } from 'react'

function useAlbums(album) {
  const [albums, setAlbums] = useState([])
  

  useEffect(() => {
    for (let key in album) {
      setAlbums(prev => [...prev, album[key]])
    }
  }, [album])

  return { albums }
}

export default useAlbums