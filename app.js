const express = require('express');
const sequelize = require('./database/index');
const seed = require('./database/seed/index');

// const User = require('./models/user'); // przykładowy import modelu usera

const app = express();
sequelize.sync().then(() => {
  console.log('Database connected');
  seed()// seed the database with users
});;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});