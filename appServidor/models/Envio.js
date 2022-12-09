const mongoose =require ('mongoose');
const AgencyShema= mongoose.Schema({
    cliente:{
        type: String,
        required: true,
    },
    encargado:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    paquete:{
        type: String,
        required: true,
    },
    fecha:{
        type: Date,
        default: Date.now()
    }
});
module.exports= mongoose.model('envio', AgencyShema);