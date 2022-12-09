// Rutas para el esquema de agencias
const express = require('express');
const router = express.Router();

// Importar el controlador
const envioController = require('../controllers/EnviosController');

// api/agencias
// Agregar una agencia
router.post('/', envioController.addEnvio);

// Listar las agencias
router.get('/', envioController.loadEnvios);

// Cargar una sola agencia
router.get('/:id', envioController.loadEnvio);

// Editar una agencia
router.put('/:id', envioController.updateEnvio);

// Eliminar una agencia
router.delete('/:id', envioController.deleteEnvio);

module.exports = router;