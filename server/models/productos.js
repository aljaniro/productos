const mongoose = require('mongoose')
const ProductosSchema = mongoose.Schema({
nombre:{
    type:String,
    require:true
},
categoria:{
    type:String,
    require:true
},
ubicacion:{
    type:String,
    require:true
},
precio:{
    type:Number,
    require:true
},
fechacreacion:{
    type:Date,
    default: Date.now()
}
})
module.exports = mongoose.model('producto',ProductosSchema)