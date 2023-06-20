import React from 'react'
import '../../../styles/SongInfo/Overview/artist-top.scss'
import { Link } from 'react-router-dom'

function ArtistTopSongs({ info, top }) {
  
  const getArtworkURL = (art) => {
    return art.replace(/{[a-z]}/g, '300')
  }

  
  return (
    <div className="artist-top">
      <div className="artist-top__body">
        <h2 className='artist-top__title'>Top songs by - { info.subtitle }</h2>
        <ul className="artist-top__list songs__list">
          {top.map(song => {
            return (
              <li className="artist-top__item songs__item" key={song.id}>
                <div className="artist-top__song songs__song">
                  <img 
                    className='artist-top__img songs__img'
                    src={getArtworkURL(song.attributes.artwork.url)}
                  />
                  <div className="artist-top__desc songs__desc">
                    <p className="artist-top__name songs__name" >
                      { song.attributes.name }
                    </p>
                    <Link 
                      className="artist-top__artist songs__artist" 
                      to={`/artist/${info.artists[0].adamid}`}
                      state={{adamid: info.artists[0].adamid}}
                    >
                      { song.attributes.artistName }
                    </Link>
                  </div>
                </div>
                <Link 
                  className="artist-top__more songs__more" 
                  to={`/song/v2/${song.id}`}
                  state={{songID: song.id}}
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
  )
}

export default ArtistTopSongs