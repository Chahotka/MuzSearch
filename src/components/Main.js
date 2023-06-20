import React from 'react'
import '../styles/main.scss'
import { Outlet } from 'react-router'

function Main() {
  return (
    <main className="main">
      <Outlet />
    </main>
  )
}

export default Main