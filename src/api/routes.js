const express = require('express');
const CompileController = require('./controllers/CompileController');
const ParserController = require('./controllers/ParserController');

const routes = express.Router();

routes.post('/parse', ParserController.parse);
routes.post('/execute', CompileController.compile);

module.exports = routes;