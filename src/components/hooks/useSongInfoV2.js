import React, { useState, useEffect } from 'react'

function useSongInfoV2(songID) {
  const [info, setInfo] = useState(null)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({songID})
  }

  useEffect(() => {
    fetch('http://localhost:8000/song/v2', options)
      .then(res => res.json())
      .then(res => setInfo(res.data[0]))
  }, [songID])

  return { info }
}

export default useSongInfoV2