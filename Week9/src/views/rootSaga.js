// rootSaga.js
import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_ITEM, addItemSuccess, addItemFailure } from './action'; // Import action

// Dữ liệu mẫu
let data = [
  { name: 'To check email' },
  { name: 'UI task web page' },
  { name: 'Learn javascript basic' },
  { name: 'Medical App UI' },
  { name: 'Learn Java' },
];

// Giả sử bạn có một hàm API để thêm mục
const apiAddItem = (item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Thêm item vào mảng data
      data.push(item);
      resolve(item); // Mô phỏng thêm item thành công
    }, 1000);
  });
};

function* addItemSaga(action) {
  try {
    const item = yield call(apiAddItem, action.payload); // Gọi API
    yield put(addItemSuccess(item)); // Thêm item thành công
  } catch (error) {
    yield put(addItemFailure(error.message)); // Thêm item thất bại
  }
}

export default function* watchAddItem() {
  yield takeEvery(ADD_ITEM, addItemSaga); // Lắng nghe ADD_ITEM
}
