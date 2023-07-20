const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const UserRoutes = require("./routes/UserRoute");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/users", UserRoutes);

module.exports = app;
