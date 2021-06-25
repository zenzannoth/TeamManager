const Player = require('../models/player.model');

module.exports.index=(req, res) => {
    res.json({
        message: "Hello World"
    });
}


module.exports.createPlayer = (req, res) => {
    const { playerName, playerPosition, playerStatus } = req.body;
    Player.create({
        playerName,
        playerPosition,
        playerStatus
    })
        .then( player => res.json(player))
        .catch( err => res.json(err));
}
