import React from 'react'
import '../../../styles/SongInfo/Lyrics/lyrics.scss'

function SongLyrics({ lyrics, showLyrics }) {
  return (
    <section className={ showLyrics ? 'lyrics' : 'lyrics hide'}>
      <div className="lyrics__container container">
        <div className="lyrics__body">
          <ul className="lyrics__list">
            { lyrics &&
              lyrics.text.map((lyric, key) => {
                return (
                  <li
                    className={lyric.length > 0 ? 'lyrics__item' : 'lyrics__item emp'}
                    key={key}
                  >
                    { lyric }
                  </li>
                )
              })
            }
          </ul>
          { lyrics && 
            <p className='lyrics__footer'>{ lyrics.footer }</p>
          }
        </div>
      </div>
    </section>
  )
}

export default SongLyrics