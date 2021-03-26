const express = require("express");
const router = express.Router();

const equipmentController = require("./../controller/equipmentController");

router.post("/eqType", equipmentController.createEqType);

router.get("/eqType", equipmentController.getAllEquimentTypes);

module.exports = router;
