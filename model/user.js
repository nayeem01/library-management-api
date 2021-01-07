const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
    },
    mobile: {
        type: Object,
        match: [/^(?:\88|01)?\d{11}$/, "please enter valid bangladeshi number"],
    },
    isLibrarian: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", UserSchema);
