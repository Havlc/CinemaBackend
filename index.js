const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./src/routes/movie');
require('express-async-errors');

app.use(cors());
app.use(express.json());
app.use('/api/repertoires', routes);

require("./src/startup/connectDB")();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
