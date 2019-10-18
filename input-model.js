const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputsSchema = new Schema({
    input1: {
        type: Number,
        require: [true, 'Number1 field is required to proceed.'],
        min: [0, 'Field value must be >= 0.'],
    } ,
    input2: {
        type: Number,
        require: [true, 'Number1 field is required to proceed.'],
        min: [0, 'Field value must be >= 0.'],
    },
    result: {
        type: Number,
        require: [true, 'Number1 field is required to proceed.'],
        min: [0, 'Field value must be >= 0.'],
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
 
const Inputs = mongoose.model('inputs', inputsSchema);
 
module.exports = Inputs;