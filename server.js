const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const items = require('./routes/Items');

app.use('/api/items', items);

const db = config.MONGODB_URI;

app.listen(config.SERVER_PORT, () => {
    console.log("Server started on port: " + config.SERVER_PORT);
    mongoose.connect(db, {useNewUrlParser : true})
    .then( () => console.log("Mongo DB Connected..."))
    .catch( (err) => console.log(err));
})

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/client/build'));
    app.get('*', () => (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

