const { People } = require("../../models");

const getAll = async (req, res) => {
  const people = await People.find({});
  res.json({
    status: "success",
    code: 200,
    data: { result: people },
  });
};

module.exports = getAll;
