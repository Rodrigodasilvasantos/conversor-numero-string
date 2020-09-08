const express = require('express');
const bodyParser = require('body-parser')

const porta = 3000
const extenso = require('extenso');

const app = express()
 app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/', (req, res) => {
  let value = req.body.valor.toString()
  res.send(extenso(value, {mode: 'currency'}))
})

app.listen(porta, () =>{
  console.log('server running')
})

