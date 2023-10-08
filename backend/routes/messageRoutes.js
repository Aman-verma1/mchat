const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const protect = require("../middlelayers/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
