// // store.js
// import { createStore } from 'redux';

// const initialState = {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// };

// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_NAME':
//       return { ...state, name: action.payload };
//     case 'SET_EMAIL':
//       return { ...state, email: action.payload };
//     case 'SET_SUBJECT':
//       return { ...state, subject: action.payload };
//     case 'SET_MESSAGE':
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(formReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "../userSlice"

export default configureStore({
    reducer:{
        case : caseReducer
    }
})
