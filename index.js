
const express = require('express')
const app = express()
const path = require('path')
let estado= 'Apagado'

app.use('/Public', express.static(path.join(__dirname, 'Public')))
app.get('/', (req, res) =>  res.sendfile(path.join(__dirname+'/html Apagado.html')))
app.get('/Encender', ( req, res ) => {
  res.sendFile(path.join (__dirname+'/Html Encedido.html'))
  console.log(estado)
})
app.get('/Apagar', (req, res) => {
  estado= 'Apagado'
  res.sendfile(path.join(__dirname+'/html Apagado.html'))
  console.log(estado)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
