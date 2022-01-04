const express = require("express")
const conectarDb = require("./config/db")
const cors = require('cors')
//creamos el servidor
const app = express()
// conectar a la base de datos
conectarDb();
app.use(cors())
app.use(express.json())
app.use('/api/productos',require('./routes/productos'))


app.listen(3001,()=>{
    console.log('el servidor esta corriendo')
})
console.log("servidor activado")