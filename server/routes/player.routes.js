const PlayerController = require('../controllers/player.controllers');

module.exports = function(app) {
    app.get('/api', PlayerController.index);
    app.post('/api/players/new', PlayerController.createPlayer);
}
