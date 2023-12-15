const mongoose = require("mongoose");

const citeSchema = new mongoose.Schema({
  cite: {
    type: String,
    required: true,
    minLength: 3,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

const Cite = mongoose.model("Cite", citeSchema);

module.exports = Cite;
