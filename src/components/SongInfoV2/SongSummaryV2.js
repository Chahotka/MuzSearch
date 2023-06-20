import React from 'react'
import '../../styles/SongInfoV2/SongSummaryV2.scss'
import useArtistColor from '../hooks/useArtistColor';
import { Link } from 'react-router-dom';

function SongSummaryV2({ album }) {
  // Дописать фулл инфу альбома точка остановки жанры
  const { url } = useArtistColor(album?.attributes.artwork.url)


  return (
    <section className='summary-v2'>
      <div className="summary-v2__container container">
        <div className="summary-v2__body">
          <h2 className='summary-v2__title'>Album</h2>
          <div className="summary-v2__album">
            <img 
              src={url}
              alt="Album coverart" 
              className="summary-v2__image" 
            />
            <div className="summary-v2__desc">
              <p 
                className="summary-v2__name"
              >
                <span>Name:</span> { album.attributes.name }
              </p>
              <Link
                className='summary-v2__artist'
                to={`/artist/${album.relationships.artists.data[0].id}`}
                state={{adamid: album.relationships.artists.data[0].id}}
              >
                <span>Artist:</span> { album.attributes.artistName }
              </Link>
              <p
                className='summary-v2__count'
              >
                <span>Tracks:</span> { album.attributes.trackCount}
              </p>
              <p
                className='summary-v2__genres'
              >
                <span>Genres:</span> {album.attributes.genreNames.map(genre => {
                  return (
                    `${genre} `
                  )
                })}
              </p>
              <p
                className='summary-v2__release'
              >
                <span>Released:</span> {album.attributes.releaseDate}
              </p>
            </div>
            <Link 
              className="summary-v2__more songs__more"
              to={`/album/${album.id}`}
              state={{albumID: album.id}}
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SongSummaryV2