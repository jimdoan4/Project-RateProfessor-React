const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const professorController = require('../controllers/professorController');
const userController = require('../controllers/userController');

router.get('/', appController.index);

router.get('/users/', userController.index);
router.post('/users/', userController.create);
router.get('/users/:userId/', userController.show);
router.put('/users/:userId/', userController.update);
router.delete('/users/:userId/', userController.delete);

router.get('/professors/', professorController.index);
router.post('/professors/', professorController.create);
router.get('/professors/:professorId/', professorController.show);
router.put('/professors/:professorId/', professorController.update);
router.delete('/professors/:professorId/', professorController.delete);

module.exports = router;
