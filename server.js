const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const book = require("./router/book");
const user = require("./router/user");
dotenv.config({ path: "./config/conf.env" });

const app = express();
connectDB();
app.use(express.json());

app.use(morgan("dev"));

//routes
app.use("/api/v1/books", book);
app.use("/api/v1/user", user);

const PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    console.log(`server is Running at port ${PORT}`)
);
process.on("RejectionHandler", (err, promise) => {
    console.log(`Error : ${err.message}`);
    server.close(() => process.exit(1));
});
