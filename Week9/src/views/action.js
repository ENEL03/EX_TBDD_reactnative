export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';


export const addItem =(item)=> ({
  type:'ADD_ITEM',
  payload:item,
});

export const addItemSuccess = (item) => ({
  type: 'ADD_ITEM_SUCCESS',
  payload: item,
});

export const addItemFailure = (error) => ({
  type: 'ADD_ITEM_FAILURE',
  payload: error,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});