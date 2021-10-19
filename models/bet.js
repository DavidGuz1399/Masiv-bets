const {Schema,model} = require('mongoose');

const BetSchema = Schema({
    operation: {
        type:Boolean,
        default: true
    },
    number: {
        type:Number,
        required:[true, 'El numero es obligatoria']
    },
    color: {
        type:String,
        required:[true, 'El color es obligatorio'],
        emun:['Negro','Rojo']
    },
    money: {
        type:String,
        required:[true, 'La apuesta es obligatoria']
    }
})
module.exports=model('Bet',BetSchema)