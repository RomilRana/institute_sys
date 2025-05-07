require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const routes = require("./routes/index");
app.use("/api", routes);

const cors = require("cors");
const { sequelize } = require("./models");

app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync({ force: false }).then(() => {
    console.log("Database connected successfully");
  });
});
