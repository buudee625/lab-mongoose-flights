const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flight");

router.get("/", flightCtrl.index);
router.get("/new", flightCtrl.newFlight);
router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.show);

module.exports = router;
