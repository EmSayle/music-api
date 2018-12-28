const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  album: {},
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
