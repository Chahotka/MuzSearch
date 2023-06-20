import React, { useEffect, useState } from 'react'

function useSearch(search, setSearch, searchText, setSearchText, setDelay) {
  const [history, setHistory] = useState([])
  const [searchInfo, setSearchInfo] = useState(null)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({term: encodeURI(searchText)})
  }

  const delayHandler = () => {
    setTimeout(() => {
      setDelay(false)
    }, 1000)
  }

  useEffect(() => {
    localStorage.getItem('search')
    ? setHistory(JSON.parse(localStorage.getItem('search')))
    : localStorage.setItem('search', JSON.stringify(history))
  }, [])

  useEffect(() => {
    localStorage.setItem('search', JSON.stringify(history))
  }, [history])

  useEffect(() => {

    if (search && searchText.length > 0) {

      fetch('http://localhost:8000/search', options)
        .then(res => res.json())
        .then(res => setSearchInfo(res))

      history.length > 9 
      ? setHistory(prev => [searchText, ...prev].slice(0, -1))
      : setHistory(prev => [searchText, ...prev])
      localStorage.setItem('search', JSON.stringify(history))

      setDelay(true)
      setSearch(false)

      delayHandler()
    }
  }, [search])

  return { searchInfo }
}

export default useSearch