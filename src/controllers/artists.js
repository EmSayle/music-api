const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  artist.save()
    .then((data) => {
      res.status(201).json(data.toObject());
    })
    .catch((error) => {
      res.status(400).json(error, 'error, cannot save artist');
    });
};

exports.find = (req, res) => {
  Artist.find()
    .then((artists) => {
      res.status(200).json(artists);
    });
};

// findByOne() method - retrieves artist by ID as does findById
// exports.findOne = (req, res) => {
//   Artist.findOne({ _id: req.params.id }, (err, artist) => {
//     if (err || artist === null) {
//       res.status(404).json({ error: 'The artist could not be found.' });
//     } else {
//       res.status(200).json(artist);
//     }
//   });
// };

// findByID() for retrieving an artist (alternative to findOne())
exports.findById = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (err || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.patch = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    const genre = req.body.genre;
    const name = req.body.name;
    if (err || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.set({ genre: genre, name: name });
      artist.save((updatedArtist) => {
        console.log('*******', req.body);
        res.status(200).json(updatedArtist);
      });
    }
  });
};

exports.delete = (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if (err || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.delete({ artist: null });
      res.status(204).json(artist);
    }
  });
};
