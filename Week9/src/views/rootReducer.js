// rootReducer.js
import { combineReducers } from 'redux';
import listReducer from './listReducer'; // Import reducer danh sách

const rootReducer = combineReducers({
  list: listReducer, // Kết hợp reducer
});

export default rootReducer; // Xuất reducer gốc
