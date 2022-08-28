import {
    CustId,
    SelectProduct,
} from '../actions/types';

const initialState = {
    prevState: [],
    CustId: {},
    selectedProduct: 'Hotels/ Restaurants'
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CustId:
            return {
                ...state,
                cred: action.payload
            };
        case SelectProduct:
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;