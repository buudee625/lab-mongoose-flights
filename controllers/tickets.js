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
  Flight.findById(req.params.id, function (err, flightDoc) {
    // console.log(flightDoc.ticket, "<-- flightDoc.ticket from AT2F() BEFORE");
    // console.log(req.body.ticketId, "<-- req.body.ticketId from AT2F()");
    flightDoc.ticket.push(req.body.ticketId);
    // console.log(flightDoc.ticket, "<-- flightDoc.ticket from AT2F() AFTER");
    flightDoc.save(function (err) {
      res.redirect(`/flights/${flightDoc._id}`);
    });
  });
}
