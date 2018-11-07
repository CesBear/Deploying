const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const keys = require('./confing/keys');
//mongoose.connect(keys.mongoConnection);


const app = express();

app.get('/api/usuarios', (req, res) => {
    res.send({ usuarios: 'wololo'});
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);


