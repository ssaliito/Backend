const Router = require('express');

// API middlewares
const { createMateriaAPI, viewMateriaAPI, updateMateriaAPI, deleteMateriaAPI} = require('../api/materias.api');

// Inicializar router
const router = Router();

// Methods POST
router.post('/materias/createMateria', createMateriaAPI);

// Methods GET
router.get('/materias/viewMateria', viewMateriaAPI);

// Rutas put
router.put('/materias/updateMateria', updateMateriaAPI);

// Rutas delete
router.delete('/materias/deleteMateria', deleteMateriaAPI);

module.exports = router;