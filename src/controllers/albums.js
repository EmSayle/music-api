const Album = require('../models/album');
const Artist = require('../models/artist');

exports.postAlbum = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (err) {
      res.json('Artist does not exist');
    }

    const album = new Album({
      artist,
      name: req.body.name,
      year: req.body.year,
    });

    album.save((createErr, createdAlbum) => {
      if (createErr) {
        res.json('Could not create an album');
      }

      res.status(201).json(createdAlbum);
    });
  });
};

exports.find = (req, res) => {
  Album.find()
    .then((albums) => {
      res.status(200).json(albums);
    });
};

exports.findById = (req, res) => {
  Album.findById(req.params.id, (err, album) => {
    if (err || album === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(album);
    }
  });
};
