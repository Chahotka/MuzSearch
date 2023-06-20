import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'
import HeaderSearch from './Header/HeaderSearch'

function Header() {
  // Проверить весь код
  // Потом адаптив

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__body">
          <nav className="header__nav">
            <Link className='header__link' to={'/'}>MuzSearch</Link>
            <HeaderSearch />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header