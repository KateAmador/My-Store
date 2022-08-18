const express = require('express');

const productService = require('./../services/productService');

const router = express.Router();
const service = new productService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

//todo lo que es especifico debe ir antes de ...
router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
});

//... todo lo que es dinamico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  if(!product){
    res.status(404).json({
      message: `El producto con id ${id} no existe`
    });
  } else {
    res.status(200).json({
      product
    });
  }

});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

//patch recibe los objetos de forma parcial
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
