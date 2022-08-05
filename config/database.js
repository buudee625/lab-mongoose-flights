const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights')

mongoose.connection.on('connected', function(){
    console.log('Connected to mongoDB at 27017');
})