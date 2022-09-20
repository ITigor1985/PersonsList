const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { peopleShema } = require("../../schemas");
const { people: ctrl } = require("../../controllers");

const router = express.Router();

const validateMiddleware = validation(peopleShema);

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateMiddleware, ctrl.add);

router.delete("/:peopleId", ctrlWrapper(ctrl.removeById));

router.put("/:peopleId", validateMiddleware, ctrl.updateById);

module.exports = router;
