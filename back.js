const PORT = 8000
const bp = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');
const express = require('express')
require('dotenv').config()
const app = express()

const top = require('./data/Top20Songs.json')
const search = require('./data/SearchInfo.json')
const top2 = require('./data/hjhh.json')
const song = require('./data/SongInfo.json')
const song2 = require('./data/SongInfo2.json')
const songV2 = require('./data/SongInfoV2.json')
const artistTop = require('./data/ArtistTop.json')
const artistTop2 = require('./data/ArtistTop2.json')
const artistInfo = require('./data/ArtistInfo.json')
const artistInfo2 = require('./data/ArtistInfo2.json')
const albumInfo = require('./data/AlbumInfo.json')
const albumInfo2 = require('./data/AlbumInfo2.json')
const albumSong = require('./data/AlbumSong.json')
const albumSong2 = require('./data/AlbumSong2.json')




app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/', (req, res) => {
  console.log(req.body)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/search', (req, res) => {
  console.log(req.body.term)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  fetch(`https://shazam.p.rapidapi.com/search?term=${req.body.term}&locale=en-US&offset=0&limit=5`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/song', (req, res) => {
  console.log(req.body.songKey)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${req.body.songKey}&locale=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/song/v2', (req, res) => {
  console.log(req.body.songID)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/songs/v2/get-details?id=${req.body.songID}&l=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))

})

app.post('/artist-top', (req, res) => {
  console.log(req.body.adamid)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/artists/get-top-songs?id=${req.body.adamid}&l=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/artist', (req, res) => {
  console.log(req.body.adamid)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/artists/get-summary?id=${req.body.adamid}&l=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/album', (req, res) => {
  console.log(req.body.albumID)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/albums/get-details?id=${req.body.albumID}&l=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.post('/album/song', (req, res) => {
  console.log(req.body)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  }

  fetch(`https://shazam.p.rapidapi.com/songs/v2/get-details?id=${req.body.id}&l=en-US`, options)
    .then(response => response.json())
    .then(response => res.json(response))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT} yopta`))