const express = require("express");
const router = express.Router();
const controller = require("../controllers/tituloController")


router.get('/', controller.getAll)

router.post('/', controller.createTitle)

router.get('/pixar', controller.getPixar)

router.get('/walldisney', controller.getWallDisney)

router.get('/warnerbros', controller.getWarner)

router.patch('/:id', controller.updateTitulo)

router.delete('/:id', controller.deleteTitulo)

module.exports = router