const express = require("express");
const router = express.Router();
const {
    getUser,
    newUser,
    deleteUserByID,
    getdeletedUser,
    updateUser,
    getStdBymobile,
    getLibrarian,
} = require("../controllers/UserController");

router.route("/student").get(getStdBymobile);
router.route("/student/:id").put(updateUser);

router.route("/").get(getUser).post(newUser);
router.route("/deleted").get(getdeletedUser);
router.route("/search").get(getLibrarian);
router.route("/:id").get(deleteUserByID).put(updateUser);

module.exports = router;
