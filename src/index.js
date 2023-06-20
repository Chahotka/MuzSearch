import './styles/index.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import MainPage from './components/roots/MainPage';
import SongInfo from './components/roots/SongInfo';
import SongInfoV2 from './components/roots/SongInfoV2';
import ArtistInfo from './components/roots/ArtistInfo';
import AlbumInfo from './components/roots/AlbumInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/song/:songKey',
        element: <SongInfo />
      },
      {
        path: '/song/v2/:songID',
        element: <SongInfoV2 />
      },
      {
        path: '/artist/:artistID',
        element: <ArtistInfo />
      },
      {
        path: '/album/:albumID',
        element: <AlbumInfo />
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


