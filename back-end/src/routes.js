const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

const OngMiddleware = require('./middleware/OngMiddleware');
const IncidentsMiddleware = require('./middleware/IncidentsMiddleware');


routes.post('/sessions', OngMiddleware.validateSession(), SessionController.create);

routes.get('/ongs', OngController.listAll);
routes.post('/ongs', OngMiddleware.validaDataOngs(), OngController.create);

routes.get('/profile', OngMiddleware.validaDadosProfile(), ProfileController.index);

routes.get('/incidents', IncidentsMiddleware.validaNumberPaginacao(), IncidentsController.index);
routes.post('/incidents', IncidentsMiddleware.validateDataIncidents(), IncidentsController.create);
routes.delete('/incidents/:id', IncidentsMiddleware.validateDeleteIncidents(), IncidentsController.delete);

module.exports = routes;