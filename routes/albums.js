var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.redFileSync(file_path, 'utf8'));
}

module.exports = function(router) {
  router.get('/albums/new', function(req, res) {
    res.render('new');
  });
}
