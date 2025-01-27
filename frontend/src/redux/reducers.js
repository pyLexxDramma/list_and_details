const initialState = {
  loading: false,
  service: null,
  error: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SERVICE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_SERVICE_SUCCESS':
      return { ...state, loading: false, service: action.payload };
    case 'FETCH_SERVICE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default serviceReducer;
