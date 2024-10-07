const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserById,
  getAllUsers,
} = require("../controller/user.controller");

router.post("/create", createUser);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);
// complete put , delete

module.exports = router;
