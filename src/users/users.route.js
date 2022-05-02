const router = require('express').Router();
const userController = require('./users.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.post('/create', userController.createUserController);
router.get('/', userController.findAllUserController);

module.exports = router;
