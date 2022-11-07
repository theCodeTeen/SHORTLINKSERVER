const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Link", LinkSchema);
