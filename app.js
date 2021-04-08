const express = require('express');
const app = express();

app.arguments((res, res) => {
    res.json({ message : 'Votre requête a réussi !' });
})

module.exports = app;