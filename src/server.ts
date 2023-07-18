//Importar o pacote express para criar o servidor
const express = require("express")
//Importar o pacote File System para manipular arquivos
const fs = require('fs');
//Importar banco de dados de extensão .json
const data = require('../database.json'); 
//Instancia o express na variável app
const app = express()
//
app.use(express.json());

//Listar registros
app.get('/api/users', (req: any, res: any) => {
  const jsonData = fs.readFileSync(data)
  res.send(JSON.parse(jsonData))
})

//Iniciar servidor
app.listen(3000, ()=>{
    console.log(`listeniing at port: 3000`)
}) 