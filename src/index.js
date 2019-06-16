const mongoose = require('mongoose');
const server = require('./server');
const logger = require('./utils/loggerUtil');
const { serverAdress } = require('./config/adresses');

mongoose.connect('mongodb://127.0.0.1:27017/local', { useNewUrlParser: true }, (err) => {
    if (err) {
        logger().error("mongo connected");
    } else {
        logger().info("mongo connected");
    }
});

server.listen(3000, () => {
    logger().info(`server listening port ${serverAdress.port}`);
});