import React from 'react'
import '../../styles/Artist/ArtistAlbums.scss'
import useAlbums from '../hooks/useAlbums'
import { Link } from 'react-router-dom'

function ArtistAlbums({ album, adamid }) {
  const { albums } = useAlbums(album)

  const getArtworkURL = (art) => {
    return art.replace(/{[a-z]}/g, '300')
  }

  return (
    <section className='albums'>
      <div className="albums__container container">
        <div className="albums__body">
          <h2 className='albums__title'>Albums</h2>
          <ul className="albums__list songs__list">
            {
              albums.map(album => {
                return (
                  <li className='albums__item songs__item' key={album.id}>
                    <div className="albums__album songs__song">
                      <img 
                        className='albums__img songs__img'
                        src={getArtworkURL(album.attributes.artwork.url)}
                      />
                      <div className="albums__desc songs__desc">
                        <h2 className='albums__name songs__name'>{ album.attributes.name }</h2>
                        <h2 className='albums__count'>Tracks: { album.attributes.trackCount }</h2>
                      </div>
                    </div>
                    <Link 
                      className="albums__more songs__more"
                      to={`/album/${album.id}`}
                      state={{albumID: album.id, adamid}}
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

export default ArtistAlbums