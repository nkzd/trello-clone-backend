const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api');
const middleware = require('./middleware');
const port = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/list', api.getLists);
app.get('/list/:id', api.getList);
app.post('/list/', api.createList);
app.patch('/list/:id', api.editList);
app.delete('/list/:id', api.deleteList);

app.get('/list/:id/card', api.getCards);
app.get('/list/:listId/card/:cardId', api.getCard);
app.post('/list/:id/card', api.createCard);
app.patch('/list/:listId/card/:cardId', api.editCard);
app.delete('/list/:listId/card/:cardId', api.deleteCard);
app.post('/list/reorderCards', api.reorderCards);

app.get('/label', api.getLabels);
app.get('/label/:id', api.getLabel);
app.post('/label', api.createLabel);
app.patch('/label/:id', api.editLabel);
app.delete('/label/:id', api.deleteLabel);

app.use(middleware.handleValidationError);
app.use(middleware.handleError);
app.use(middleware.notFound);

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);
