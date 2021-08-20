const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

//Mostra todos os estúdios
const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
}

//Cria um estúdio
const createStudio = async (req, res) => {
    const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm,
    })
    //verifica se o mesmo nome passado acima está no no meu estudio
    const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
    if(estudioJaExiste){
        return res.status(409).json({error: 'Estudio já cadastrado'})
    }
    try{ //vou tentar o q esta abaixo qdo a rota post for chamada
      const novoEstudio = await estudio.save()
      res.status(201).json(novoEstudio)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

//Atualiza o nome de um estúdio
const updateEstudio = async (req,res) => {

  try{
    const estudio = await Estudio.findById(req.params.id)
    if(estudio == null){
      return res.status(404).json({message: "estudio nao encontrado"})
    }

    if(req.body.nome != null){
      estudio.nome = req.body.nome
    }

    const estudioAtualizado = await estudio.save()
    return status(200).json(estudioAtualizado)


  } catch (err){
    res.status(500).json({message: err.message})
  }
}

//Deleta um estúdio
const deleteEstudio = async(req, res) => {
  try{
    const estudio = await Estudio.findById(req.params.id)
    if(estudio == null){
      return res.status(404).json({message: "Estudio não encontrado"})
    }

    estudio.remove()
    res.status(200).json({message: "Estudio removido com sucesso"})


  } catch (err){
    res.status(500).json({message: err.message})
  }
}


module.exports = {getAll, createStudio, updateEstudio, deleteEstudio}