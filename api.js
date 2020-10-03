const List = require('./models/list');
const autoCatch = require('./util/autocatch');

const getLists = async (req, res) => {
  const lists = await List.find({});
  res.json(lists);
};

const createList = async (req, res) => {
  const list = await List.create(req.body);
  res.json(list);
};

const getList = async (req, res) => {
  const list = await List.findById(req.params.id);
  res.json(list);
};

const editList = async (req, res) => {
  const change = req.body;
  const list = await List.findById(req.params.id);
  for (key in change) {
    list[key] = change[key];
  }
  await list.save();
  return res.json(list);
};

const deleteList = async (req, res) => {
  await List.deleteOne({ _id: req.params.id });
  res.end();
};

module.exports = autoCatch({
  getLists,
  createList,
  getList,
  editList,
  deleteList,
});
