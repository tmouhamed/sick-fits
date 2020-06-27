require('dotenv').config({ path: 'variables.env' });
const creatServer = require('./createServer');
const db = require('./db');

const server = creatServer();

//use express middleware to handle cookies

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
      },
}, deets => {
    console.log(`server is now running on http://localhost:${deets.port}`);
});