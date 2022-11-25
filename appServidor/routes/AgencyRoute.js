// Rutas para el esquema de agencias
const express = require('express');
const router = express.Router();

// Importar el controlador
const agencyController = require('../controllers/AgencyController');

// api/agencias
// Agregar una agencia
router.post('/', agencyController.addAgency);

// Listar las agencias
router.get('/', agencyController.loadAgencies);

// Cargar una sola agencia
router.get('/:id', agencyController.loadAgency);

// Editar una agencia
router.put('/:id', agencyController.updateAgency);

// Eliminar una agencia
router.delete('/:id', agencyController.deleteAgency);

module.exports = router;