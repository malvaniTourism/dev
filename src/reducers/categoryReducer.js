import {
    CustId,
} from '../actions/types';

const initialState = {
    prevState: [],
    CustId: '',
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CustId:
            return {
                ...state,
                CustId: action.payload
            };
        default:
            return state;
    }
}

export default commonReducer;