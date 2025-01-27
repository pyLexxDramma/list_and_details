// src/components/ServiceDetails.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetails = () => {
  const { id } = useParams(); // Получаем id из URL
  const dispatch = useDispatch();
  const { loading, error, service } = useSelector(state => state.service || {}); // Измените на правильный путь к Вашему состоянию

  useEffect(() => {
    const fetchServiceDetails = async () => {
      dispatch({ type: 'FETCH_SERVICE_REQUEST' }); // Уведомляем о начале загрузки
      try {
        const response = await axios.get(`http://localhost:7070/api/services/${id}`); // Запрос на получение деталей услуги
        dispatch({ type: 'FETCH_SERVICE_SUCCESS', payload: response.data }); // Успешно загружаем данные
      } catch (error) {
        dispatch({ type: 'FETCH_SERVICE_FAILURE', payload: error.message }); // Обработка ошибки
      }
    };

    fetchServiceDetails();
  }, [dispatch, id]);

  if (loading) return <div style={styles.loading}>Загрузка...</div>;
  if (error) return <div style={styles.error}>Ошибка: {error} <button onClick={() => dispatch({ type: 'FETCH_SERVICE_REQUEST' })}>Повторить</button></div>;

  // Проверяем, существует ли service перед доступом к его свойствам
  if (!service) {
    return <div style={styles.error}>Услуга не найдена.</div>;
  }

  return (
    <div style={styles.detailsContainer}>
      <h1>Детали услуги</h1>
      <p><strong>Название:</strong> {service.name}</p>
      <p><strong>ID:</strong> {service.id}</p>
      {/* Добавьте другие поля, если необходимо */}
    </div>
  );
};

const styles = {
  loading: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#007BFF',
  },
  error: {
    textAlign: 'center',
    fontSize: '20px',
    color: 'red',
  },
  detailsContainer: {
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    margin: '20px',
  },
};

export default ServiceDetails;
