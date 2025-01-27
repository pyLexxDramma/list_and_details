const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 7070;

// Пример данных
const services = [
  { id: 1, name: 'Услуга 1' },
  { id: 2, name: 'Услуга 2' },
  { id: 3, name: 'Услуга 3' },
];

// Используйте CORS
app.use(cors());

// Маршрут для получения всех услуг
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Маршрут для получения услуги по ID
app.get('/api/services/:id', (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find(s => s.id === serviceId);
  if (service) {
    res.json(service);
  } else {
    res.status(404).send('Услуга не найдена');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
