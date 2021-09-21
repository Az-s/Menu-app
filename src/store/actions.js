import axiosApi from '../axiosApi';

export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';
export const FETCH_MENU_POST = 'FETCH_COUNTER_POST';

export const fetchMenuRequest = () => ({ type: FETCH_MENU_REQUEST });
export const fetchMenuSuccess = dishList => ({ type: FETCH_MENU_SUCCESS, dishList });
export const fetchMenuFailure = (error) => ({type: FETCH_MENU_FAILURE , payload: error});
export const fetchMenuPost = () => ({type: FETCH_MENU_POST})

export const fetchDishMenu = () => {
    return async dispatch => {
        dispatch(fetchMenuRequest());
        try {   
            const response = await axiosApi.get('menuList.json');
            dispatch(fetchMenuSuccess(Object.values(response.data)));
        } catch (e) {
            dispatch(fetchMenuFailure());
        }
    };
};

export const createOrder = (orderData) => {
    return async dispatch => {
        try {   
            dispatch(fetchMenuRequest());
            await axiosApi.post('orders.json' , orderData);
            dispatch(fetchMenuSuccess());
        } catch (error) {
            dispatch(fetchMenuFailure(error));
        }
    };
};