import { createStore } from 'redux';
import rootReducer from './reducers'; // Импортируйте Ваш корневой редюсер

const store = createStore(rootReducer); // Создайте Redux-хранилище

export default store; // Экспортируйте хранилище