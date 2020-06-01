/**
 * Framework imports
 */
var mongoose = require('mongoose');

/**
 * Global variables
 */
var Schema = mongoose.Schema;

/**
 * Schema definition
 */
var dataSchema = new Schema({
  name: { type: String, required: true},
  img: { type: String, required: true },
  summary: { type: String, required: true },
});

/**
 * Create Mongoose model for data schema
 */
var Data = mongoose.model('Data', dataSchema);

/**
 * Exporting data schema model
 */
module.exports = Data;