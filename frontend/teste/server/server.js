const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes);


//console.log(process.env.MYSQL_USER);

const port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
