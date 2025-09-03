import {ADD_ITEM,ADD_ITEM_SUCCESS,ADD_ITEM_FAILURE,REMOVE_ITEM,SET_ITEMS} from './action'

const initialState = {
  items: [{ id: 1, name: 'To check email' },
    { id: 2, name: 'UI task web page' },
    { id: 3, name: 'Learn javascript basic' },
    { id: 4, name: 'Medical App UI' },
    { id: 5, name: 'Learn Java' },],
  loading: false,
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        loading: true, // Bắt đầu quá trình thêm item
        error: null,   // Reset lỗi
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false, // Hoàn tất quá trình thêm item
        items: [...state.items, action.payload], // Thêm item mới vào danh sách
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        loading: false, // Hoàn tất quá trình thêm item
        error: action.payload, // Lưu lỗi nếu có
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload), // Xóa item theo index
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload, // Thiết lập lại danh sách items
      };
    default:
      return state; // Trả về trạng thái hiện tại nếu không có action nào khớp
  }
};

export default listReducer;