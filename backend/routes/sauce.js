const express = require('express');

const router = express.Router();
const controller = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post("/", auth, multer, controller.createSauce);
router.get("/:id", auth, controller.getSauce);
router.get("/", auth, controller.getSauces);
router.put("/:id", auth, multer, controller.updateSauce);
router.delete("/:id", auth, controller.deleteSauce);
router.post("/:id/like", auth, controller.likeSauce);

module.exports = router;