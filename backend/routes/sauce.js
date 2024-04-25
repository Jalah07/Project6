const express = require('express');

const router = express.Router();
const controller = require('../controllers/sauce');
//const auth = require()

router.post("/", controller.createSauce);
router.get("/:id", controller.getSauce);
router.get("/", controller.getSauces);
router.put("/:id", controller.updateSauce);
router.delete("/:id", controller.deleteSauce);
router.post("/:id/like", controller.likeSauce);

module.exports = router;