import React, { useEffect, useRef, useState } from 'react'
import ColorThief from 'colorthief'

function useColor(images, bgImg) {
  const [colors, setColors] = useState(null)
  const [gradient, setGradient] = useState(null)

  const getColor = (images) => {
    const image = new Image()

    image.crossOrigin = 'anonymous'
    image.src =  `${images?.coverart || images?.background || bgImg}`
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

    setGradient(`${gradObj.base}${gradObj.brackO}${gradObj.direct},${gradObj.col1},${gradObj.col2}${gradObj.brackC}`)
  }

  useEffect(() => {
    getColor(images)
  }, [images])

  useEffect(() => {
    getGradient(colors)
  }, [colors])

  return { gradient }
}

export default useColor