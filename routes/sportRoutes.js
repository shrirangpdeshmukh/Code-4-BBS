const express = require("express");
const router = express.Router();

const equipmentController = require("./../controller/equipmentController");

router.get("/eqtype", equipmentController.getAllEquimentTypes);
router.get("/eqtype/:id", equipmentController.getAllEquiments);
router.post("/eqtype", equipmentController.createEqType);

router.get("/eq/:id", equipmentController.getEquipment);
router.post("/eq/", equipmentController.createEquipment);

module.exports = router;
