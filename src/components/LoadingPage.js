import React from 'react'
import '../styles/loading-page.scss'

function LoadingPage() {
  return (
    <div className="loading">
      <h1 className="loading__title">Loading</h1>
      <span className="loading__dot loading__dot-1">.</span>
      <span className="loading__dot loading__dot-2">.</span>
      <span className="loading__dot loading__dot-3">.</span>
    </div>
  )
}

export default LoadingPage