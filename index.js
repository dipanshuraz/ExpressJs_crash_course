const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");

const app = express();

//init middleware
// app.use(logger);

// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// members api routes
app.use("/api/members", require("./routes/api/members"));

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running...", PORT);
});
