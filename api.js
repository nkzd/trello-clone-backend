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

const getList = async (req, res, next) => {
  try {
    const list = await List.findById(req.params.id);
    res.json(list);
  } catch (error) {
    next(error);
  }
};

console.log(
  autoCatch({
    getLists,
    createList,
    getList,
  })
);

module.exports = autoCatch({
  getLists,
  createList,
  getList,
});
