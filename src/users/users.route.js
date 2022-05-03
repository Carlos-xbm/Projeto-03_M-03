const router = require('express').Router();
const userController = require('./users.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');



router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.post('/create', userController.createUserController);
router.get('/', userController.findAllUserController);
// character
router.post('/characters/create', userController.createCharacterController);
router.get('/characters', userController.findAllCharacterController);
router.get('/characters/find/:id', userController.findByIdCharacterController);
router.put('/characters/update/:id',userController.updateCharacterController);
router.delete('/characters/delete/:id',userController.deleteCharacterController);
router.get('/characters/search', userController.findByNameCharacterController);


module.exports = router;
