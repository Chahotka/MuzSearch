import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/search-results.scss'
import bgImg from '../../images/nakrilo.jpg'

function SearchResults({ tracks, artists, setActive }) {

  return (
    <div className="header__results results">
      { tracks && <h2 className="results__title">Tracks</h2> }
      <ul className="results__tracks">
        { tracks &&
          tracks.hits.map(song => {
            return (
              <li className="results__track track" key={song.track.key}>
                <div className="track__body">
                  <img 
                    src={ 
                      song.track.images ?
                      song.track.images.coverart ||
                      song.track.images.background 
                      : bgImg
                    }
                    alt="" 
                    className="track__img" 
                  />
                  <div className="track__desc">
                    <h2 className="track__name">
                      { song.track.title }
                    </h2>
                    <Link 
                      className="track__artist"
                      to={`artist/${song.track.artists[0].adamid}`}
                      state={{adamid: song.track.artists[0].adamid}}
                      onClick={() => setActive(false)}
                    >
                      { song.track.subtitle }
                    </Link>
                  </div>
                </div>
                  <Link 
                    className="track__more"
                    to={`/song/${song.track.key}`}
                    state={{songKey: song.track.key}}
                    onClick={() => setActive(false)}
                  >
                    Show more
                  </Link>
              </li>
            )
          })
        }
      </ul>
      { artists && <h2 className="results__title">Artists</h2> }
      <ul className="results__artists">
        { artists &&
          artists.hits.map(artist => {
            return (
              <li className="results__artist artist" key={artist.artist.adamid}>
                <Link
                  to={`/artist/${artist.artist.adamid}`}
                  state={{adamid: artist.artist.adamid}}
                  className='artist__link'
                >
                  <img 
                    src={
                      artist.artist.avatar ?
                      artist.artist.avatar :
                      bgImg
                    }
                    alt="Artist avatar" 
                    className="artist__img" 
                  />
                  <h2 className="artist__name">
                    { artist.artist.name }
                  </h2>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SearchResults