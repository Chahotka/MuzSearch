import React, { useEffect, useState } from 'react'
import SearchLogo2 from '../../images/search2.svg'
import useSearch from '../hooks/useSearch'
import SearchResults from '../Header/SearchResults'
import SearchHistory from './SearchHistory'

function HeaderSearch() {
  const [delay, setDelay] = useState(false)
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(false)
  const [searchText, setSearchText] = useState('')

  const { searchInfo } = useSearch(search, setSearch, searchText, setSearchText, setDelay)

  useEffect(() => {
    if (active) {
      document.getElementsByTagName('body')[0].classList.add('lock')
    } else {
      document.getElementsByTagName('body')[0].classList.remove('lock')
    }
  }, [active])

  window.removeEventListener('click', this)

  const inputHandler = (e) => {
    if (e.key === 'Escape') {
      setActive(false)
      e.target.blur()
    }
    if (e.key === 'Enter' && e.target.value.length > 0 && !delay) {
      setSearch(true)
      setSearchText(searchText.trim())
    }
  }

  return (
    <>
      <div className="header__search">
        <input
          type="text"
          value={searchText}
          className="header__input"
          placeholder='Search for music'
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => inputHandler(e)}
          onFocus={() => setActive(true)}
        />
        <img
          src={SearchLogo2}
          className='header__search-logo'
          onClick={() => setSearch(true)}
        />
        { active && searchText.length === 0 && <SearchHistory setSearchText={setSearchText}/> }
        { active && searchText.length > 0 && searchInfo && <SearchResults tracks={searchInfo.tracks} artists={searchInfo.artists} setActive={setActive} /> }
      </div>
      { active && <div id='bg' className="header__bg" onClick={() => setActive(false)}></div> }
    </>
  )
}

export default HeaderSearch