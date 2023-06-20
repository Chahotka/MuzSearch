import React, { useEffect, useRef, useState } from 'react'
import ColorThief from 'colorthief'

function useArtistColor(art, albumArt) {
  const [url, setURL] = useState(null)
  const [color, setColor] = useState(null)
  const [colors, setColors] = useState(null)
  const [albumURL, setAlbumURL] = useState(null)
  const [gradient, setGradient] = useState(null)

  const getArtworkURL = (art) => {
    return art?.replace(/{[a-z]}/g, '300')
  }

  const getColor = (url) => {
    const image = new Image()

    image.crossOrigin = 'anonymous'
    image.src =  url
    image.onload = (image) => {
      const colorThief = new ColorThief()
      const palette = colorThief.getPalette(image.target, 2)
      setColors(palette)
    }
  }

  const getGradient = (colors) => {
    const gradObj = {
      base: 'linear-gradient',
      col1: `rgba(${colors && colors[0]})`,
      col2: `rgba(${colors && colors[1]})`,
      brackO: '(',
      brackC: ')',
      direct: 'to top'
    }

    setColor(`${gradObj.col1}`)
    setGradient(`${gradObj.base}${gradObj.brackO}${gradObj.direct},${gradObj.col1},${gradObj.col2}${gradObj.brackC}`)
  }

  useEffect(() => {
    setURL(getArtworkURL(art))
  }, [art])

  useEffect(() => {
    getColor(url)
  }, [url])

  useEffect(() => {
    getGradient(colors)
  }, [colors])

  useEffect(() => {
    setAlbumURL(getArtworkURL(albumArt))
  }, [albumArt])


  return { url, color, gradient, albumURL }
}

export default useArtistColor