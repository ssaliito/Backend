const Router = require('express');
const router = Router();

// Import routes
const authRoutes = require('./modules/auth/routes/auth.routes');
const materiasRoutes = require('./modules/materias/routes/materias.routes');

// status api endpoint
router.get('/api-status',(req,res)=>{
    return res.send({'Status':'on'})
})

// User routes
router.use(authRoutes);
router.use(materiasRoutes);

module.exports = router;