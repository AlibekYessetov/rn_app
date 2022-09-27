const ADD_ITEM = "ADD_ITEM";
const SET_MODEL = "SET_MODEL";
const COUNT_PLUS = "COUNT";

const initialState = {
  furnituries: [],
  model: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        furnituries: [...state.furnituries, action.data],
      };
    }
    case SET_MODEL: {
      return {
        ...state,
        model: action.model,
      };
    }
    default:
      return state;
  }
};

{
  /*Action Creators*/
}
const addItemToCart = (data) => ({ type: ADD_ITEM, data });
export const removeItemFromCart = (index) => ({
  type: REMOVE_ITEM,
  data: index,
});
export const setModelAC = (model) => ({ type: SET_MODEL, model });

{
  /*Thunk Creators*/
}
export const addItemTC = (data, allProductsInCard) => {
  return (dispatch) => {
    dispatch(addItemToCart(data));
    alert("Товар успешно добавлен в корзину!");
  };
};

export default CartReducer;
