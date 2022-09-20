const { NotFound } = require("http-errors");

const { People } = require("../../models");

const updateById = async (req, res) => {
  const { peopleId } = req.params;
  const result = await People.findByIdAndUpdate(peopleId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = updateById;
