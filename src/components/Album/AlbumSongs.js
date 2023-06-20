import React from 'react'
import '../../styles/Album/album-songs.scss'
import { Link } from 'react-router-dom'

function AlbumSongs({ adamid, album, url }) {

  const getArtworkURL = (art) => {
    return art?.replace(/{[a-z]}/g, '300')
  }

  return (
    <section className='album'>
      <div className="album__container container">
        <div className="album__body">
          <div className="album__title">Songs: {album.attributes.trackCount}</div>
          <ul className="album__list songs__list">
            {
              album.relationships.tracks.data.map(song => {
                return (
                  <li className="top__item songs__item" key={song.id}>
                    <div className="top__song songs__song">
                      <img 
                        className='top__img songs__img'
                        src={getArtworkURL(song.attributes.artwork.url)}
                        alt='Song coverart' 
                      />
                      <div className="top__desc songs__desc">
                        <p className="top__name songs__name" title={song.title}>
                          { song.attributes.name }
                        </p>
                        <Link 
                          className="top__artist songs__artist"
                          state={{adamid}}
                          to={`/artist/${adamid}`}
                        >
                          {song.attributes.artistName}
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/song/v2/${song.id}`} 
                      state={{
                        adamid,
                        songID: song.id,
                        albumArt: song.attributes.artwork.url,
                        albumSongs: album.relationships.tracks.data
                      }}
                      className='top__more songs__more'
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

export default AlbumSongs