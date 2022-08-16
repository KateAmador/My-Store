const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.status(200).json({
      limit,
      offset
    });
  } else {
    res.status(404).json();
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
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
