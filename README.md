### {reprograma} week 14 - Projeto Guiado: CRUD com MongoDB :rocket: 
---
<p align = "center">
<a align href = "#Sobre">Sobre</a> │
<a align href = "#Objetivo">Objetivo</a> │
<a align href = "#Regras">Regras</a> │
<a align href = "#Tecnologias">Tecnologias</a> │
<a align href = "#Pré-requisitos">Pré-requisitos</a> │
<a align href = "#Autora">Autora</a>
</p>

---

## Sobre
<p>Exercício desenvolvido no bootcamp da {reprograma} onde nos foi desafiado realizarmos um projeto filmes-db, que é um sistema de gerenciamento de catálogos de filmes dos estudios Wall Disney, Warner Bros e Pixar. </p>

## Objetivo
<p>O objetivo desse exercício é realizar um CRUD (Create, Read, Update e Delete) através do banco de dados utilizando o mongoose e dotenv(gerencia dados que não devem ser compartilhados no seu projeto).</p>

## Regras

- [x]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [x]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [x]  **"/titulos/[ID]"** Deverá deletar titulo por id específico e retorna mensagem amigável
- [x]  **"/estudios/[ID]"** Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  **"/titulos/[ID]"** Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [x]  **"/estudios/[ID]"** Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

## Tecnologias
- [VsCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/)

## Pré-requisitos

    npm i nodemoon

## Autora
Made with :purple_heart: by [Lívia Oliveira](https://www.linkedin.com/in/l%C3%ADvia-de-oliveira-almeida/)











