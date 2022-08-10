const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flights");

router.get("/", flightCtrl.index);
router.get("/new", flightCtrl.newFlight);
router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.show);

module.exports = router;
