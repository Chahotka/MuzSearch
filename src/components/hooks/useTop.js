import React, { useState } from 'react'

function useTop() {
  const [top, setTop] = useState(null)

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (!top) {
    fetch('http://localhost:8000', options)
      .then(res => res.json())
      .then(res => setTop(res?.tracks))
  } 

  return { top }
}

export default useTop