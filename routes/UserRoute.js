const UserController = require("./../controllers/UserController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(UserController.getAllUser)
  .post(UserController.createUser);

router
  .route("/:id")
  .get(UserController.getOneUser)
  .patch(UserController.updateUser)
  .delete(UserController.deletUser);

module.exports = router;
