const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

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
  // console.log(req.params.id, "<--- req.params.id from show()");
  Flight.findById(req.params.id)
    // .populate("ticket")
    .exec(function (err, flightDoc) {
      // console.log(flightDoc, "<--- flightDoc from show()");
      Ticket.find({}, function (err, ticketDoc) {
        // console.log(ticketDoc, "<-- ticketDoc from show()");
        res.render("flights/show.ejs", {
          flights: flightDoc,
          tickets: ticketDoc,
        });
      });
    });
}

// async function show(req, res) {
//   try {
//     const flightDoc = await Flight.findById(req.params.id).exec();
//     const ticketDoc = await Ticket.findById({
//       _id: { $nin: flightDoc.ticket },
//     });
//     res.render("flights/show.ejs", {
//       flights: flightDoc,
//       tickets: ticketDoc,
//     });
//   } catch (err) {
//     res.send(err);
//   }
// }
