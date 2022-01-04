const productos = require("../models/productos")



exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro producto
        producto = new productos(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const producto = await productos.find();
        res.json(producto)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.updateproducto = async (req,res)=>{
    try {
        const {nombre,categoria,ubicacion,precio} = req.body
        let producto = await productos.findById(req.params.id)
        if(!producto){
            res.status(400).json({msg:'producto no exisste'})
        }
        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion= ubicacion
        producto.precio = precio
        producto = await productos.findOneAndUpdate({ _id: req.params.id},producto,{new:true})
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.getid = async (req,res)=>{
    try {
        let producto = await productos.findById(req.params.id)
        if(!producto){
            res.status(400).json({msg:'producto no exisste'})
        }
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteproducto = async (req,res)=>{
    try {
        let producto = await productos.findById(req.params.id)
        if(!producto){
            res.status(404).json({msg:'producto no exisste'})
        }
        await productos.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: 'Producto eliminado con exito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        
    }
}