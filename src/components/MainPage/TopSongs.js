import React from 'react'
import '../../styles/MainPage/top-songs.scss'
import { Link } from 'react-router-dom'
import bgImg from '../../images/nakrilo.jpg'

function TopSongs({ top }) {

  return (
    <section className="top">
      <div className="top__container container">
        <div className="top__body">
          <h1 className='top__title'>Top 20 songs</h1>
          <ul className="top__list songs__list">
            { top &&
              top.map(song => {
                return (
                  <li className="top__item songs__item" key={song.key}>
                    <div className="top__song songs__song">
                      <img 
                        className='top__img songs__img'
                        src={ song.images ?
                          song.images.coverart || 
                          song.images.background
                          : bgImg
                        }
                        alt='Song coverart' 
                      />
                      <div className="top__desc songs__desc">
                        <p className="top__name songs__name" >
                          { song.title }
                        </p>
                        <Link 
                          className="top__artist songs__artist"
                          to={song.artists && `/artist/${song.artists[0].adamid}`}
                          state={song.artists && {adamid: song.artists[0].adamid}}
                        >
                          { song.subtitle }
                        </Link>
                      </div>
                    </div>
                    <Link 
                      className="top__more songs__more"
                      to={`/song/${song.key}`}
                      state={{songKey: song.key}}
                    >
                      Show more
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TopSongs