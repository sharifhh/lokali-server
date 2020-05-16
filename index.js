const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// routes
require("./routes/api")(app);

// listen event
app.listen(PORT, () => {
  console.log("listening on port" + PORT + "\nhttp://localhost:" + PORT);
});
