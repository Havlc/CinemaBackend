const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("./startup/connectDB")();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
