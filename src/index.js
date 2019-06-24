const mongoose = require("mongoose");
const logger = require("./utils/loggerUtil");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const { serverAdress } = require("./config/adresses");
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb://127.0.0.1:27017/local",
  { useNewUrlParser: true },
  err => {
    if (err) {
      logger().error("mongo not connected");
    } else {
      logger().info("mongo connected");
    }
  }
);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(require("./routes"));

server.listen(3000, () => {
  logger().info(`server listening port ${serverAdress.port}`);
});
