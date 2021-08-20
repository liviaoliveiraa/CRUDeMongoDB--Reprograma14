const express = require('express')
const router = express.Router()
const controller = require("../controllers/estudioController")

//READ - listar todos os estudios -> get(CRUD) ->find(MONGOOSE)
router.get('/', controller.getAll)

//CREATE - criar um estudio -> post -> save
router.post('/', controller.createStudio)

router.patch('/:id', controller.updateEstudio)

router.delete('/:id', controller.deleteEstudio)

module.exports = router