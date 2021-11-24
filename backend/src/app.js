const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const urlController = require('./api/controllers/shorten.controller');
const retrieveController = require('./api/controllers/retrieve.controller');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.json({
        message: 'hey! this is the backend api for cmprs.it'
    });
});

app.use('/api/v1/', urlController);
app.use(retrieveController);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
