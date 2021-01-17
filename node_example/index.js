const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('tiny'));

app.get('/', (req, res) => {
  res.send('Hello world from node docker!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening.`);
});