const Flight = require('../models/flight');

module.exports = {
    index,
    newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flightDoc){
        console.log(flightDoc);

        res.render('flights/index.ejs', {
            flights: flightDoc
        })
    })
}

function newFlight(req, res) {
    res.render('flights/new.ejs')
}

function create(req, res) {
    
}