const Agency = require('../models/Agency');

// Agregar una agencia
exports.addAgency = async (req, res) => {
    try {
        let agency;
        //Crear la nueva agencia
        //Se envia todo el cuerpo del formulario
        agency = new Agency(req.body);
        await agency.save();
        res.send(agency);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar la agencia');
    }
}

// Listar las agencias
exports.loadAgencies = async (req, res) => {
    try {
        const agencies = await Agency.find();
        res.json(agencies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar las agencias');
    }
}

// Cargar una sola agencia
exports.loadAgency = async (req, res) => {
    try {
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            return res.status(404).json({ msg: 'No existe la agencia' });
        }
        res.json(agency);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar la agencia');
    }
}

// Editar una agencia
exports.updateAgency = async (req, res) => {
    try {
        const { name, address } = req.body;
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            return res.status(404).json({ msg: 'No existe la agencia' });
        }
        // Crear un objeto con la nueva información
        agency.name = name;
        agency.address = address;
        // Guardar la agencia
        // El parámetro new: Simula que se borra y se crea una nueva agencia
        agency = await Agency.findOneAndUpdate({ _id: req.params.id }, agency, { new: true });
        res.json(agency);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar la agencia');
    }
}

// Eliminar una agencia
exports.deleteAgency = async (req, res) => {
    try {
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            return res.status(404).json({ msg: 'No existe la agencia' });
        }
        await Agency.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Agencia eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar la agencia');
    }
}