const Flight = require("../models/flight");

module.exports = {
  index,
  newFlight,
  create,
  show,
};

function index(req, res) {
  Flight.find({}, function (err, flightDoc) {
    res.render("flights/index.ejs", {
      flights: flightDoc,
    });
  });
}

function newFlight(req, res) {
  res.render("flights/new.ejs");
}

function create(req, res) {
  // console.log(req.body, "<-- req.body");
  // console.log(req.body.departs, "<-- req.body.departs");
  Flight.create(req.body, function (err, flightsDoc) {
    if (err) {
      console.log(err, "<-- err in flight create func");
      return res.render("flights/new.ejs");
    }

    // console.log(flightsDoc, '<--flightDoc');
    res.redirect("/flights");
  });
}

function show(req, res) {
  // console.log(req.params.id, "<--- req.params.id from flights/show()");
  Flight.findById(req.params.id)
    // .populate("ticket")
    .exec(function (err, flightDoc) {
      // console.log(flightDoc, "<--- flightDoc from flights/show()");
      res.render("flights/show.ejs", {
        flights: flightDoc,
      });
    });
}
