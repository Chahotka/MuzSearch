import React from 'react'
import useTop from '../hooks/useTop'
import LoadingPage from '../LoadingPage'
import TopSongs from '../MainPage/TopSongs'

function MainPage() {
  const { top } = useTop()
  
  return (
    <>
      { top ? <TopSongs top={top} /> : <LoadingPage />}
    </>
  )
}

export default MainPage