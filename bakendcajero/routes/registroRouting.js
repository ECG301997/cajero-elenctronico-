const {Router} = require('express');
const {check} =  require('express-validator');
const {validarCmapos} = require('../middelwares/validacionUsers/validacionExpress')
const {inserUser,retiroDinero} = require('../controllers/registroController');
const { existeMail } = require('../middelwares/validacionUsers/validaremaiLdB.JS');
const { validarPass } = require('../middelwares/validacionUsers/validaremaiLdB.JS');
const   {}= require('../controllers/homeConroller');
const getMovi = require('../controllers/homeConroller');
const router = Router();

router.get('/:documento',
getMovi
)
router.post('/',
existeMail,
validarPass,
validarCmapos,
inserUser);




module.exports =  router