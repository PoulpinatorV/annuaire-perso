const express = require('express');
const app = express();



app.use('/api/games',(req, res, next) => {
  const games = [
      {
        _id : 'odsuhvod',
        title : 'The last of us',
        year : 2011,
        imageUrl : '', 
      },
      {
          _id : 'dsfdsbvu',
          title : 'Pokemon Blue',
          year : 1999,
          imageUrl : '',
      },
  ];
  res.status(200).json(games);
});

module.exports = app;