const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  console.log(req.body, "<-req.body from desti. form");
  Flight.findById(req.params.id, function (err, flightDoc) {
    flightDoc.destinations.push(req.body);
    console.log(flightDoc, "<-flightDoc from disti. form create()");
    flightDoc.save(function (err) {
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}
