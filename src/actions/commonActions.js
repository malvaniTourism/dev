import {
    CustId,
    SelectProduct,
    SaveString,
    SaveLoginUser,
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

const saveLoginUser = data => {
    return {
        type: SaveLoginUser,
        payload: data
    }
}

export { saveData, selectType, saveSearchString, saveLoginUser }