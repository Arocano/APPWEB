const express = require('express');
const cors = require('cors');
const conecartDB=require('./config/db');
const app = express();

conecartDB();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{res.send("Hola mundo")});

app.listen(4500, () => console.log('Servidor corriendo en el puerto 4500'));
