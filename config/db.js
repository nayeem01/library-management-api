const mongoos = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./conf.env" });

const connectDB = async () => {
    const conn = await mongoos.connect(process.env.URL_DB, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${conn.connection.host}`);
};
//console.log(process.env.URL_DB);
module.exports = connectDB;
