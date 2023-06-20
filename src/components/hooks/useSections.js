import React, { useEffect, useState } from 'react'

function useSections(sections) {
  const [song, setSong] = useState(null)
  const [video, setVideo] = useState(null)
  const [lyrics, setLyrics] = useState(null)

  const getSections = (sections) => {
    sections && sections.map(sect => {
      if (sect.type === 'SONG') {
        setSong(sect)
      }
      if (sect.type === 'VIDEO') {
        setVideo(sect.youtubeurl)
      }
      if (sect.type === 'LYRICS') {
        setLyrics(sect)
      }
    })
  }

  useEffect(() => {
    getSections(sections)
  }, [sections])

  return { song, video, lyrics }
}

export default useSections