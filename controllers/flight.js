const Flight = require('../models/flight');

module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, flightDoc){
        console.log(flightDoc);

        res.render('flights/index.ejs', {
            flight: flightDoc
        })
    })
}