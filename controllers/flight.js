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
    console.log(req.body, '<-- req.body')
    Flight.create(req.body, function(err, flightsDoc){
        if(err){
            console.log(err, '<-- err in flight create func')
            return res.render('flights/new.ejs')
        };
        console.log(flightsDoc);
        res.redirect('/flights')
    })
};