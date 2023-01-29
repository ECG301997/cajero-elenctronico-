const {Router} = require('express');
const {check} =  require('express-validator');
const {validarCmapos} = require('../middelwares/validacionUsers/validacionExpress')
const {inserUser,retiroDinero,consignarDinero,getUser} = require('../controllers/registroController');
const { existeMail } = require('../middelwares/validacionUsers/validaremaiLdB.JS');
const { validarPass } = require('../middelwares/validacionUsers/validaremaiLdB.JS');

const router = Router();
router.get('/',
getUser
)
router.post('/:documento',
retiroDinero
)

router.post('/consignar/:documento',
consignarDinero
)



module.exports = router;