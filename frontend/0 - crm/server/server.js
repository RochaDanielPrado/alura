const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.MYSQL_USER);

const http = require('http');
const app = require('./config/express');
const { Console } = require('console');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
