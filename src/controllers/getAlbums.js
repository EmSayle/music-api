const Album = require('../models/album');

exports.getAlbums = (req, res) => {
  Album.find({ artist: req.params.id }).populate('artist').exec((err, albums) => {
    if (err) {
      res.json('Unable to retrieve albums');
    }

    res.json(albums);
  });
};
