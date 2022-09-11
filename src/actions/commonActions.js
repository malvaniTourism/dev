import {
    CustId,
    SelectProduct,
    SaveString,
} from './types';

const saveData = data => {
    return {
        type: CustId,
        payload: data
    }
}

const selectType = data => {
    return {
        type: SelectProduct,
        payload: data
    }
}

const saveSearchString = data => {
    return {
        type: SaveString,
        payload: data
    }
}

export { saveData, selectType, saveSearchString }