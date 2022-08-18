const express = require('express');

const productService = require('./../services/productService');

const router = express.Router();
const service = new productService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

//todo lo que es especifico debe ir antes de ...
router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
});

//... todo lo que es dinamico
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  if (!product) {
    res.status(404).json({
      message: `El producto con id ${id} no existe`,
    });
  } else {
    res.status(200).json({
      product,
    });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//patch recibe los objetos de forma parcial
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
