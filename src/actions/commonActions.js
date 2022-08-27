import {
    CustId
} from './types';

export const saveData = data => {
    return {
        type: CustId,
        payload: data
    }
}
