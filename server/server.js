var express = require('express');
var http = require('http');
var socketio = require('socket.io');

app = express()

//
// Create the router.
//
var apiRouter = express.Router()

apiRouter.get('/', (req, res, next) => {
  res.send("Hello");
})

//
// Add the different routers.
//
app.use('/api', apiRouter)

//
// Create the server.
//
httpServer = http.createServer(app);

//
// Create the websocket connection.
//
var io = socketio(httpServer);
io.on('connect',(e) => {
  console.log('Connection...');
});

//
// Run the server:
//
try {
  server = httpServer.listen(9878)
} catch (e) {
  console.log(e);
}
