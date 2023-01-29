const {Router} = require('express');
const {check} =  require('express-validator');
const {validarCmapos} = require('../middelwares/validacionUsers/validacionExpress')
const {auth} = require('../controllers/loginController')
const router = Router();

router.post('/',
check('correo','debe proporcionar un email valido').isEmail(),
validarCmapos,
auth
)
module.exports = router

