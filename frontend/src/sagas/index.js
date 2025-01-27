import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

// Функция для получения услуг
function* fetchServices() {
    try {
        const response = yield call(axios.get, 'http://localhost:7070/api/services');
        yield put({ type: 'FETCH_SERVICES_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_SERVICES_FAILURE', payload: error.message });
    }
}

// Функция для получения деталей услуги
function* fetchServiceDetails(action) {
    try {
        const response = yield call(axios.get, `http://localhost:7070/api/services/${action.payload}`);
        yield put({ type: 'FETCH_SERVICE_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_SERVICE_DETAILS_FAILURE', payload: error.message });
    }
}

// Слушатель для действий
function* watchFetchServices() {
    yield takeEvery('FETCH_SERVICES_REQUEST', fetchServices);
}

function* watchFetchServiceDetails() {
    yield takeEvery('FETCH_SERVICE_DETAILS_REQUEST', fetchServiceDetails);
}

// Корневая сага
export default function* rootSaga() {
    yield all([
        watchFetchServices(),
        watchFetchServiceDetails(),
    ]);
}
