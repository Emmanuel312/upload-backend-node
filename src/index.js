require('dotenv').config()

const express = require('express')
const morgan = require('morgan') // para log
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()

/*
    Database setup
*/
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true
})

app.use(cors()) // permite q outros dominios acessem a api
// permite que o express reconheca requisicoes no formato json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan(''))
app.use(require('./routes'))
app.use('/files', express.static(path.resolve(__dirname,'..','tmp','uploads')))
// static libera acesso p arquivos estaticos

app.listen(3000, () =>
{
    console.log('backend executando...')
})