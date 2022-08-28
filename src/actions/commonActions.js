import {
    CustId,
    SelectProduct
} from './types';

export const saveData = data => {
    return {
        type: CustId,
        payload: data
    }
}

export const selectType = data => {
    return {
        type: SelectProduct,
        payload: data
    }
}