const express = require("express");
// const registerUser = require("../controllers/userController");
// const authUser = require("../controllers/userController");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const protect = require("../middlelayers/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
