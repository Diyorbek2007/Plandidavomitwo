/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { productsConstants } from "../actions/constants";

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
    }

    return state;
}