const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const inputModel = require('./input-model');
const app = express();
const port = 3030;

app.use(express.static('node_modules'));
app.use(express.static('src'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/test-app', connectDB);

app.get('/', renderIndexFile);
app.get('/getData', getData);
app.post('/saveData', saveData);

app.listen(port, appListen);


/**
 * Render Index File
 * @param {*} req 
 * @param {*} res 
 */
function renderIndexFile(req, res) {
    res.sendFile(__dirname + '/src/index.html');
}

/**
 * Get Data
 * - Will return last saved inputs data.
 * @param {*} req 
 * @param {*} res 
 */
function getData(req, res) {
    inputModel.find({}, (err, succ) => {
        if (err) {
            res.json({
                success: false,
                error: err
            });
        } else {
            res.json({
                success: true,
                data: succ.length ? succ[0] : null
            });
        }
    }).sort({ _id: -1 }).limit(1);
}

/**
 * Save Data
 * - Will save input data with validation.
 * @param {*} req 
 * @param {*} res 
 */
function saveData(req, res) {
    const data = req.body;
    if (data && data.input1 && data.input2 && data.result) {
        inputModel.create(data, (err, succ) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    data: succ
                });
            }
        });
    } else {
        res.json({
            success: false,
            error: 'Required fields are missing -> number1, number2, result.'
        });
    }
}

/**
 * App Listen
 */
function appListen() {
    console.log(`Application running on http://localhost:${port}`);
}

/**
 * Connect DB
 * @param {*} err 
 */
function connectDB(err) {
    if (err) throw err;
}