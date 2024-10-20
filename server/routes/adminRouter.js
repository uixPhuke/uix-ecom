const express = require("express");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const adminCtrl = require("../controllers/adminCtrl");
const router = express.Router();

router.get("/customer", auth, authAdmin, adminCtrl.getAllUser);
router.put("/edit/:id", auth, authAdmin, adminCtrl.updateUsers);
router.delete("/edit/:id", auth, authAdmin, adminCtrl.deleteUser);

module.exports = router;
