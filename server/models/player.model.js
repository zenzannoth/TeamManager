const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: { type, String, 
    required: [ true, "Player name is required " ],
    minLength: [ 3, "Player name must be at least 3 characters" ],
    },
    playerPosition: { type, String },
    playerStatus: { type, String },
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);