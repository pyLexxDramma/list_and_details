export const FETCH_SERVICE_REQUEST = 'FETCH_SERVICE_REQUEST';
export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
export const FETCH_SERVICE_FAILURE = 'FETCH_SERVICE_FAILURE';

export const fetchServiceRequest = () => ({ type: FETCH_SERVICE_REQUEST });
export const fetchServiceSuccess = (service) => ({ type: FETCH_SERVICE_SUCCESS, payload: service });
export const fetchServiceFailure = (error) => ({ type: FETCH_SERVICE_FAILURE, payload: error });
