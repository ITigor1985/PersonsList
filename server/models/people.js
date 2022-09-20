const { Schema, model } = require("mongoose");

const peopleSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for person"],
    },
    surname: {
      type: String,
      required: [true, "Set surname for person"],
    },
  },
  { versionKey: false, timestamps: true }
);

const People = model("people", peopleSchema);

module.exports = {
  People,
};
