const Envio = require('../models/Envio');

// Agregar una agencia
exports.addEnvio = async (req, res) => {
    try {
        let envio;
        //Crear la nueva agencia
        //Se envia todo el cuerpo del formulario
        envio = new Envio(req.body);
        await envio.save();
        res.send(envio);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el envio');
    }
}

// Listar las agencias
exports.loadEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();
        res.json(envios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar las agencias');
    }
}

// Cargar una sola agencia
exports.loadEnvio = async (req, res) => {
    try {
        let envio = await Envio.findById(req.params.id);
        if (!envio) {
            return res.status(404).json({ msg: 'No existeel envio' });
        }
        res.json(envio);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar la agencia');
    }
}

// Editar una agencia
exports.updateEnvio = async (req, res) => {
    try {
        const { cliente, encargado,direccion, paquete,fecha } = req.body;
        let envio = await Envio.findById(req.params.id);
        if (!envio) {
            return res.status(404).json({ msg: 'No existe la agencia' });
        }
        // Crear un objeto con la nueva información
        envio.cliente = cliente;
        envio.encargado = encargado;
        envio.direccion = direccion;
        envio.paquete = paquete;
        envio.fecha= fecha;
        // Guardar la agencia
        // El parámetro new: Simula que se borra y se crea una nueva agencia
        envio= await Envio.findOneAndUpdate({ _id: req.params.id }, envio, { new: true });
        res.json(envio);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar la agencia');
    }
}

// Eliminar una agencia
exports.deleteEnvio = async (req, res) => {
    try {
        let envio = await Envio.findById(req.params.id);
        if (!envio) {
            return res.status(404).json({ msg: 'No existe la agencia' });
        }
        await Envio.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Agencia eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar la agencia');
    }
}