const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

// Cargar el router


//Conectar a la base de datos
conectarDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.send('Hola mundo');
    
});

app.use('/api/agencias', require('./routes/AgencyRoute'));

app.listen(4500, () => {
    console.log('Servidor funcionando');
});