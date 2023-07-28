import { combineReducers } from 'redux';
import { SUBMIT_BOOKING_FORM } from './actions';

const initialFormState = {
  name: '',
  phone: '',
  // ... (other form fields)
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case SUBMIT_BOOKING_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formData: formReducer,
});

export default rootReducer;
