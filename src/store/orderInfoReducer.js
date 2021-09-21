import {ADD_DISH, REMOVE_DISH, INIT_DISH_ORDER, SET_MODAL_OPEN} from "../store/orderInfoActions";

const initialState = {
    menuList: {
        dish: '',
        price: 0,
      },
  totalPrice: 0,
  showPurchaseModal: false,
  something: 'test',
};

const reducerOrderInfo = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DISH_ORDER:
      return {...initialState};
    // case ADD_DISH:
    //   return {
    //     ...state,
    //     menuList: {
    //       ...state.menuList,
    //       [action.payload]: state.menuList[action.payload] + 1 // state.ingredients['meat']
    //     },
    //     totalPrice: state.totalPrice + menuList[action.payload].price
    //   };
    // case REMOVE_DISH:
    //   if (state.menuList[action.payload] <= 0) {
    //     return state;
    //   }

    //   return {
    //     ...state,
    //     ingredients: {
    //       ...state.ingredients,
    //       [action.payload]: state.menuList[action.payload] - 1 // state.ingredients['meat']
    //     },
    //     totalPrice: state.totalPrice - menuList[action.payload].price
    //   };
    case SET_MODAL_OPEN:
      return {
        ...state, showPurchaseModal: action.payload
      };
    default:
      return state;
  }
}

export default reducerOrderInfo;