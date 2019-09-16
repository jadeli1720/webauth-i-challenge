const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//routes
const userRouter = require('');

const server = express;

server.use(express.json());
server.use(helmet());
server.use(cors());

//Telling the server to use these routes
server.use('/api/user', userRouter);

module.export = server;