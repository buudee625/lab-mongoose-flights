const express = require("express");
const router = express.Router();
const ticketCtrl = require("../controllers/tickets");

router.get("/flights/:id/tickets/new", ticketCtrl.newTicket);
router.post("/flights/:id/tickets/new", ticketCtrl.create);
router.post("/flights/:id/tickets", ticketCtrl.addTicketToFlight);
module.exports = router;
