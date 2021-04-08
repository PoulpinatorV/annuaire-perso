const express = require('express');
const app = express();

app.arguments((req, res) => {
    res.json({ message : 'Votre requête a réussi !' });
})

module.exports = app;