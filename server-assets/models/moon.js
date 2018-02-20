var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "Moon";

var schema = new Schema({
  name: { type: String, required: true },
  created: { type: Date, required: true, default: Date.now() },
  size: { type: String, enum: ["Small", "Medium", "large"] },
  hasLife: { type: Boolean, default: false },
  habitable: { type: Boolean, default: false },

  // RELATIONSHIPS
  planetId: { type: ObjectId, ref: "Planet", required: true }
  
});

module.exports = mongoose.model(schemaName, schema);
