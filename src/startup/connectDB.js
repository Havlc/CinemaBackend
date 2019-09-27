const mongoose = require("mongoose");

module.exports = function() {
  const db =
    "mongodb+srv://cinemaUser:cinema@<password>-rx1q7.mongodb.net/test?retryWrites=true&w=majority";

  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to db...`));
};
