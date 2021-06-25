const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/players", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establisedh connection to the database"))
    .catch((err) => console.log("There was a problem connecting with the database"));