const express = require('express')
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const authRouter = require('./auth/auth-router.js');
server.use('/auth', authRouter);
const userRouter = require('./auth/user-router.js');
server.use('/users', usersRouter)

const port = 4000;
server.listen(port, () => console.log(`Server on ${port}`));