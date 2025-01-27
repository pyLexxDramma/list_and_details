import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:7070/api/services');
      setServices(response.data);
    } catch (error) {
      setError('Ошибка при загрузке услуг');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) return <div style={styles.loading}>Загрузка...</div>;
  if (error) return <div style={styles.error}>{error}</div>;

  return (
    <ul style={styles.list}>
      {services.map(service => (
        <li key={service.id} style={styles.listItem}>
          <Link to={`/${service.id}/details`} style={styles.link}>{service.name}</Link> {/* Ссылка на детали услуги */}
        </li>
      ))}
    </ul>
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
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '20px',
  },
  listItem: {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  },
};

export default ServiceList;
