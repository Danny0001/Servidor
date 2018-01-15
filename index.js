
const express = require('express')
const app = express()
const path = require('path')

app.use('/Public', express.static(path.join(__dirname, 'Public')))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/Encendido', ( req, res ) => {
  res.sendFile(path.join (__dirname+'/Html Encedido.html'))
})
app.put('/Apagado', (req, res) => {
  res.send('Esta Apagado')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
