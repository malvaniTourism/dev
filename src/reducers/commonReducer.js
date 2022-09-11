import {
    CustId,
    SelectProduct,
    SaveString,
    searchString,
} from '../actions/types';

const initialState = {
    prevState: [],
    CustId: {},
    selectedProduct: 'Hotels/ Restaurants',
    searchString: '',
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
            };
        case SaveString:
            return {
                ...state,
                searchString: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;