export const ADD_DISH = 'ADD_DISH';
export const REMOVE_DISH= 'REMOVE_DISH';
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const INIT_DISH_ORDER = 'INIT_DISH_ORDER';

export const addIngredient = dishType => ({type: ADD_DISH, payload: dishType});
export const removeIngredient = dishType => ({type: REMOVE_DISH, payload: dishType});
export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});
export const initBurgerBuilder = () => ({type: INIT_DISH_ORDER});
