var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schemaName = "Planet";

var schema = new Schema({
  name: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now() },
  size: { type: String, enum: ["Small", "Medium", "large"] },
  hasLife: { type: Boolean, default: false },
  habitable: { type: Boolean, default: false },
  color: { type: String }
});

module.exports = mongoose.model(schemaName, schema);