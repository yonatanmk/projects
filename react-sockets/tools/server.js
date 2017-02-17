import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import socket from 'socket.io';
import { Server } from 'http';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const server = Server(app);
const compiler = webpack(config);
const io = socket(server);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

io.on('connection', function(socket) {
  socket.on('chat message', function(message) {
    socket.broadcast.emit('chat message', message);
  });
});

server.listen(port, function(err) {
  if (err) {
    console.log('error', err);
  } else {
    open(`http://localhost:${port}`);
  }
 });
