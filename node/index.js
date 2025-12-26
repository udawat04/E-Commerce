const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { APP_PORT, DB_URL } = require("./config");
const bodyParser = require("body-parser");
const routes = require("./routes");

// cors use
const corsOptions = {
  origin: [
    "http://localhost:3000", // React local
    "http://localhost:5173", // Vite
    "https://artisan-frontend-chi.vercel.app/",
    "https://admin-artisan.vercel.app/", // Production frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

// listen on Port
app.listen(APP_PORT, () => {
  console.log(`app is conected on ${APP_PORT} port`);
});



// body parser use
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));
app.use("/upload", express.static("upload"));


// routes folder use here
app.use(routes);


// mongoose connection establish

mongoose.connect(DB_URL).then(() => console.log("Database Connected!"));
