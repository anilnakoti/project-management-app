const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on(
    "error",
    console.error.bind(console, colors.red.underline.bold("connection error"))
  );
  db.once("open", function () {
    console.log(colors.cyan.underline.bold("Connected to MongoDB."));
  });
};

module.exports = connectDB;
