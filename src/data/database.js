require('dotenv').config()

//conectando com o banco de dados(mongo e estamos utlizando o mogoose para isso)
const mongoose = require('mongoose')
//conectando meu mongoose com o banco de dados
//nome da database filmes-db
const connect = () => {mongoose.connect(
  process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})//retorno visual de que meu banco de dados foi conectado, então qdo vc conectar mostra no console, caso nao.. pega(catch) o erro e me mostra
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }//estou exportando função, por isso entre chaves