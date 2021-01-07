const express = require("express");
const router = express.Router();
const {
    getBook,
    newBook,
    updateBook,
    getBooksByquery,
    deleteBookID,
} = require("../controllers/BookController");

router.route("/").get(getBook).post(newBook);
router.route("/find").get(getBooksByquery);
router.route("/:id").put(updateBook).get(deleteBookID);

module.exports = router;
