const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  newTicket,
  create,
};

function newTicket(req, res) {
  Ticket.findById({}, function (err, TixDoc) {
    res.render("../views/tickets/new", {
      title: "Add New Ticket",
      ticket: TixDoc,
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, TicketDoc) {
    console.log(TicketDoc, "<- TicketDoc from create()");
    res.redirect("/tickets/new");
  });
}

// function addTicketToFlight(req, res) {
//   console.log(req.params.id, "<- params.id");
//   Flight.findById(req.params.id, function (err, flightDoc) {
//     console.log(flightDoc, "<- flightDoc");
//     flightDoc.save(function (err) {
//       res.send("Done!");
//     });
//   });
// }
