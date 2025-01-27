import { combineReducers } from 'redux';
import serviceReducer from './reducers'; // Импортируйте Ваш редюсер

const rootReducer = combineReducers({
  service: serviceReducer, // Убедитесь, что Вы используете правильный ключ
  // другие редюсеры
});

export default rootReducer;
