var Albums = require('albums');

module.exports = function(router) {
  router.post('/albums', function(req, res) {
    var album = req.body,
        albums = Albums.get();

    album.id = Albums.nextID();
    albums.push(album);
    Albums.set({ last_id: album.id, data: albums });
    res.json(album);
  });

  router.put('/albums', function(req, res) {
    var album = req.body;
    album = Albums.put(album);

    res.json(album);
  });

  router.delete('/albums', function(req, res) {
    var album = req.body;
    Albums.delete(album);
    res.status(200).end();
  });

  router.get('/albums/new', function(req, res) {
    res.render('new', {
      albums: Albums.get()
    });
  });
}
