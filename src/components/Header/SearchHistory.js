import React, { useState, useEffect } from 'react'
import '../../styles/history.scss'

function SearchHistory({ setSearchText }) {
  const [history, setHistory] = useState(null)

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('search')))
  }, [])

  // Классы на историю потом на то что получили запросы в input

  return (
    <div className="history">
      <div className="history__body">
        <ul className="history__list">
          { history?.length > 0
            ? history.map((item, i) => {
              return (
                <li 
                  className="history__item"
                  key={i}
                  title={item}
                  onClick={(e) => setSearchText(item)}
                >
                  {item}
                </li>
              )
            })
            : 
            <li 
              className="history__item history__title"
            >
              No searches yet
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchHistory