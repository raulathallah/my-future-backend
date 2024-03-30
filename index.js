require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const actionRoute = require("./routes/actionRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const corsOption = {
  origin: "https://my-future-frontend.vercel.app",
  methods: ["POST", "GET", "PUT", "DELETE"],
  optionSuccessStatus: 200,
};

// .env
const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);
app.use(cors(corsOption));

// request api
app.use("/api/action", actionRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    app.listen(PORT, () => {
      console.log(`API is running on port ${PORT}.`);
    });
  })
  .catch((error) => console.log(error));
