const express = require('express');
bodyParser = require('body-parser');

const port = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);
