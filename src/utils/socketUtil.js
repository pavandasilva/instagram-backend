const server = require('../server')
const io = require('socket.io')(server);

const eventEmit = (event, content) => {
    io.emit(event, content);
}

module.exports = { eventEmit }