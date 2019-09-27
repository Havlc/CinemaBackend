const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./routes/movie');

app.use(cors());

require("./startup/connectDB")();

// Routes
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
