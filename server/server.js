const epxress = require('express');
const mongoose = require('mongoose');
const port = 8000;
require('./routes/player.routes')(app);




app.listen(port, () => console.log(`Listening on port: ${port}`));