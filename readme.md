Criar pasta do projeto
```
mkdir crudApiJson
```
Acessar a pasta
```
cd crudApiJson
```
Inciar gerenciador de pacotes
```
npm init -y
```
Instalar pacotes básicos para rodar o servidor
```
npm i typescript express nodemon ts-node body-parser
```
Iniciar configuração do typescript
```
npx tsc --init
```
Criar pasta src
```
mkdir src
```
Criar arquivo server.ts dentro da pasta src
```
touch src/server.ts
```
Criar arquivo de banco de dados
```
touch database.json
```
Criar um objeto vazio no arquivo database.json
```
{}
```

Iniciar configuração 
```
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
app.get('/api/users', (req, res) => {
  const jsonData = fs.readFileSync(data)
  res.send(JSON.parse(jsonData))
})

//Iniciar servidor
app.listen(3000, ()=>{
    console.log(`listeniing at port: 3000`)
}) 
```
Criar script
```
"start":"nodemon --exec ts-node src/server.ts"
```
```
mkdir crudApiJson
```
```
mkdir crudApiJson
```
