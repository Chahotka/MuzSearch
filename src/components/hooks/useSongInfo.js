import React, { useEffect, useState } from 'react'

function useSongInfo(songKey) {
  const [info, setInfo] = useState(null)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({songKey})
  }

  useEffect(() => {
    fetch('http://localhost:8000/song', options)
      .then(res => res.json())
      .then(res => setInfo(res))
  }, [songKey])

  return { info }
}

export default useSongInfo