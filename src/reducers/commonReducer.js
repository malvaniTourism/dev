import {
    CustId,
    SelectProduct,
    SaveString,
    searchString,
    SaveLoginUser,
} from '../actions/types';

const initialState = {
    prevState: [],
    CustId: {},
    selectedProduct: 'Hotels/ Restaurants',
    searchString: '',
    loginUser: []
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
        case SaveLoginUser:
            return {
                ...state,
                loginUser: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;