const express = require('express');
const router = express.Router();

// Пример данных
const services = [
  { id: 1, name: 'Услуга 1' },
  { id: 2, name: 'Услуга 2' },
  { id: 3, name: 'Услуга 3' },
];

// Получение всех услуг
router.get('/services', (req, res) => {
  res.json(services);
});

// Получение услуги по ID
router.get('/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (service) {
    res.json(service);
  } else {
    res.status(404).send('Услуга не найдена');
  }
});

module.exports = router;
