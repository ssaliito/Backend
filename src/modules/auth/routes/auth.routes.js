const Router = require('express');

// API middlewares
const {
    createUserAPI,
    viewUsersAPI,
    updateUserAPI,
    deleteUserAPI,
    loginAPI
} = require('../api/auth.api');

// Inicializar router
const router = Router();

// Methods POST
router.post('/auth/createUser', createUserAPI);
router.post('/auth/Login', loginAPI);

// Methods GET
router.get('/auth/viewUsers', viewUsersAPI);

// Rutas put
router.put('/auth/updateUser', updateUserAPI);

// Rutas delete
router.delete('/auth/deleteUser', deleteUserAPI);

module.exports = router;