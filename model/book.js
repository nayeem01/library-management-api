const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Please add book name"],
    },
    author: {
        type: String,
        required: [true, "Please add author name"],
    },
    price: {
        type: Number,
        required: [true, "please add price"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Book", BookSchema);
