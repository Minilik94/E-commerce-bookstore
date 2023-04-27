const express = require("express");
const userControllers = require("../controller/userControllers");
const authContorller = require("../controller/authController");

const router = express.Router();

router.route("/signup").post(authContorller.signUp);
router.route("/login").post(authContorller.login)

router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);
router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
