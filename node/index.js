const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { APP_PORT, DB_URL } = require("./config");
const routes = require("./routes");

const app = express();

/* ======================
   CORS CONFIG (FIXED)
====================== */
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://artisan-frontend-chi.vercel.app",
    "https://admin-artisan.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // 🔥 REQUIRED FOR VERCEL

/* ======================
   BODY PARSER
====================== */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ======================
   STATIC FILES
====================== */
app.use(express.static(__dirname + "/public"));
app.use("/upload", express.static("upload"));

/* ======================
   ROUTES
====================== */
app.use(routes);

/* ======================
   DATABASE
====================== */
mongoose
  .connect(DB_URL)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.error(err));

/* ======================
   SERVER
====================== */
app.listen(APP_PORT, () => {
  console.log(`App is connected on ${APP_PORT} port`);
});
