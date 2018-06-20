const express = require('express');
const path = require('path');
const db = require('../database/index');

const app = express();

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')));
app.use('/menusBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')));

app.get('/menus/restaurant/:restaurantId/menu', (req, res) => {
  db.retrieve(req.params.restaurantId, (err, results) => {
    if (err && err.message.includes('Cast to number failed for value "NaN"')) {
      res.status(400).json('Bad request');
    } else if (err) {
      res.status(500).json('Unable to retrieve menu data from database');
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/restaurant/:restaurantId/menu', (req, res) => {
  res.send('POST REQUEST')
});

app.put('/restaurant/:restaurantId/menu', (req, res) => {
  res.send('PUT REQUEST')
});

app.delete("/restaurant/:restaurantId/menu", (req, res) => {
  res.send('DELETE REQUEST');
});

module.exports = app;
