const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  newTicket,
  create,
  addTicketToFlight,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flightDoc) {
    res.render("tickets/new.ejs", {
      flights: flightDoc,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, TixDoc) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function addTicketToFlight(req, res) {
  console.log(req.params.id, "<- params.id");
  Flight.findById(req.params.id, function (err, flightDoc) {
    console.log(flightDoc, "<- flightDoc");
    flightDoc.ticket.push(req.body);
    flightDoc.save(function (err) {
      res.redirect(`/flights/${flightDoc._id}`);
    });
  });
}
