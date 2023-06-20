import React, { useEffect, useState } from 'react'

function useTopArtist(adamid) {
  const [top, setTop] = useState(null)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({adamid})
  }

  useEffect(() => {
    fetch('http://localhost:8000/artist-top', options)
      .then(res => res.json())
      .then(res => setTop(res.data))
  }, [adamid])

  return { top }
}

export default useTopArtist