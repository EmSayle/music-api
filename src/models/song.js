const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  artist: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Artist',
  },
  album: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Album',
  },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
