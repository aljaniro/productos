const express = require('express')
const router = express.Router()
const productosControllers = require('../controllers/productosControllers')
// api/productos
router.post('/',productosControllers.crearProducto);
router.get('/', productosControllers.obtenerProductos);
router.put('/:id', productosControllers.updateproducto);
router.get('/:id', productosControllers.getid);
router.delete('/:id', productosControllers.deleteproducto);
module.exports=router