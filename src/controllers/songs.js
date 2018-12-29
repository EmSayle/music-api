const Album = require('../models/album');
const Artist = require('../models/artist');
const Song = require('../models/song');

exports.postSong = (req, res) => {
  Album.findById(req.params.id, (albumNotFoundErr, album) => {
    if (albumNotFoundErr) {
      res.json('Album does not exist');
    }
    Artist.findById(req.body.id, (artistNotFoundErr, artist) => {
      if (artistNotFoundErr) {
        res.json('Artist does not exist');
      }

      const newSong = new Song({
        artist,
        album,
        name: req.body.name,
      });

      newSong.save((createErr, createdSong) => {
        if (createErr) {
          res.json('Could not save song');
        }

        res.status(201).json(createdSong);
      });
    });
  });
};
