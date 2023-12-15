const express = require("express");
const app = express();
const cors = require("cors");
const authorRoutes = require("./routes/authors.routes");
const citeRoutes = require("./routes/cites.routes");
require("dotenv").config({
  path: "./config/.env",
});

app.use(cors());
app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/cites", citeRoutes);

require("./config/mongoose.config");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
