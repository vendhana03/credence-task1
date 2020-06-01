/**
 * Framework imports
 */
const mongoose = require('mongoose');
const express = require('express');
var Data = require('./schema');

/**
 * Global variables
 */
const app = express()
const port = 5000;
const uri = 'mongodb+srv://vendhana:vendhana@cluster0-e4ebm.mongodb.net/test?retryWrites=true&w=majority';

/**
 * Connect to mongo DB
 */
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err));

/**
 * Get API for home page
 */
app.get('/', (req,res) => res.send('Home Page!!!'));

/**
 * Get API to get all data in collection
 */
app.get('/getall', (req, res) => {
    Data.find({}, { _id: 0, __v: 0 }, function(err, doc) {
        if (err) {
            res.status(500).send(err.Data)
            throw err;
        }
        res.status(200).send(doc);
    });
});

/**
 * Server listen at given port
 */
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))


//////////////////////////////////// Other Codes //////////////////////////////////

/**
 * To save a data to Data collection
 */
// var newData = Data({
    // name:'',
    // img:'',
    // summary:''
//   });
  
//   newData.save(function(err) {
//     if (err) throw err;
//     console.log('Data Saved!');
//   });
