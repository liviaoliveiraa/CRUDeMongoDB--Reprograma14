const mongoose = require("mongoose");
const Titulo = require("../models/titulo");

//Pega todos os títulos criados
const getAll = async(req,res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
}

//Cria um título
const createTitle = async(req, res)=>{
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm
    })

    const tituloExistente = await Titulo.findOne({nome: req.body.nome})
    if(tituloExistente){
        return res.status(409).json({error: 'Titulo já cadastrado'})
    }
    try{
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

//Pega todos os filmes da Pixar cadastrados
const getPixar = async (req,res) => {
    const pegarPixar = await Titulo.find().populate('estudio')
    const filtrarPixar = pegarPixar.filter(titulos => titulos.estudio.nome == "Pixar")
    res.status(200).json(filtrarPixar)
}

//Pega todos os filmes da Wall Disney cadastrados
const getWallDisney = async (req, res) => {
    const pegarDisney = await Titulo.find().populate('estudio')
    const filtrarDisney = pegarDisney.filter(titulo => titulo.estudio.nome == 'Wall Disney')
    res.status(200).json(filtrarDisney)
}

//Pega todos os filmes da Warner cadastrados
const getWarner = async (req, res) => {
    const pegarWarner = await Titulo.find().populate('estudio')
    const filtrarWarner = pegarWarner.filter(titulo => titulo.estudio.nome == 'Warner Bros')
    res.status(200).json(filtrarWarner)
}

//Atualiza um título cadastrado - NAO TA PEGANDO
const updateTitulo = async (req, res) => {

    try{
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null){
            return res.status(404).json({message: "titulo não encontrado"})
        }

        if(req.body.nome != null){
            titulo.nome = req.body.nome
        }
    

        const tituloAtualizado = await titulo.save()
        return res.status(200).json(tituloAtualizado)

    } catch (err){
        res.status(500).json({message: err.message})
    }
}

//Deleta um título
const deleteTitulo = async (req, res) => {
    try{
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null){
            return res.status(404).json({message: "Id não encontrado"})
        }

        titulo.remove()
        res.status(200).json({"message": "Titulo removido"})

    } catch (err){
        res.status(500).json({message: err.message})
    }
}



module.exports = {
    getAll,
    createTitle,
    getPixar,
    getWallDisney,
    getWarner,
    updateTitulo,
    deleteTitulo
}