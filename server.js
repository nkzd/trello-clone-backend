const express = require('express');
bodyParser = require('body-parser');
const api = require('./api');

const port = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());

app.get('/list',api.getLists);
app.get('/list/:id',api.getList);
app.post('/list/:id',api.createList);
app.patch('/list/:id',api.editList);
app.delete('/list/:id',api.deleteList);
app.post('/list/:id/card/:id/swap',api.swapCard);

app.get('/list/:id/card',api.getCard);
app.post('/list/:id/card',api.createCard);
app.patch('/list/:id/card',api.editCard);
app.delete('/list/:id/card',api.deleteCard);

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);
