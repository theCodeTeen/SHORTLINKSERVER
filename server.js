const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@cluster0.gbaoyxm.mongodb.net/${process.env.DBCOL}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => console.log("DB connection succesfull"));

const app = express();
const linkRouter = require("./routes/linkRoutes");
const redirectRoutes = require("./routes/redirectRoutes");

app.use(cors());
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use("/api/v1/link", linkRouter);
app.use("/", redirectRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
