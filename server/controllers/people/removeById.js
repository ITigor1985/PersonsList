const { NotFound } = require("http-errors");
const { People } = require("../../models");

const removeById = async (req, res) => {
  const { peopleId } = req.params;
  const result = await People.findByIdAndRemove(peopleId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    message: "people deleted",
    code: 200,
    data: { result },
  });
};
module.exports = removeById;
