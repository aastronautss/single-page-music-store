var Albums = require('albums');

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: Albums.get()
    });
  });
}
