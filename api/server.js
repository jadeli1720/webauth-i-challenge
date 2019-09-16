const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//routes
const userRouter = require('./users/user-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//Telling the server to use these routes
server.use('/api/user', userRouter);

module.exports = server;