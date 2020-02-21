const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

//routes
const userRouter = require('./users/user-router');

const server = express();

//Adding session
const sessionConfig = {
    name: 'chocofudge',
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
  };
  

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

//Telling the server to use these routes
server.use('/api/user', userRouter);

module.exports = server;