/* eslint-disable no-console */
const express = require('express');
const artist = require('./controllers/artists.js');
const album = require('./controllers/albums');
const song = require('./controllers/songs');

const app = express();
console.log(1, 'app created');

app.use(express.json());
console.log(2, 'json parser loaded');

app.post('/artists', artist.create);
console.log(3, 'artist created');

app.get('/artists', artist.find);
console.log(4, 'found artist');

// app.get('/artists/:id', artist.findOne);
// console.log(5, 'found artist by id');

app.get('/artists/:id', artist.findById);
console.log(6, 'artist found by id');

app.patch('/artists/:id', artist.patch);
console.log(7, 'artist record updated');

app.delete('/artists/:id', artist.delete);
console.log(8, 'artist deleted');

app.post('/artists/:id/albums', album.postAlbum);
console.log(9, 'album added');

app.get('/albums', album.find);
console.log(10, 'album found');

app.get('/albums/:id', album.findById);
console.log(11, 'found album by id');

app.post('/album/:id/song', song.postSong);
console.log(11, 'song added');

app.get('/songs', song.find);
console.log(12, 'found songs');

app.get('/songs/:id', song.findById);
console.log(13, 'song found by id');

module.exports = app;
