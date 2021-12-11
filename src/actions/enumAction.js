import EnumServices from '../services/enumServices';
import * as actionTypes from './actionTypes';



const getEnumLoading = () => {
    return {
        type: actionTypes.GET_ENUMS_LOADING
    }
}
const getStatesLoaded = data => {
    return {
        type: actionTypes.GET_STATES_LOADED,
        payload: data
    }
}

const getCitiesLoaded = data => {
    return {
        type: actionTypes.GET_CITIES_LOADED,
        payload: data
    }
}
const getEnumError = err => {
    return {
        type: actionTypes.GET_ENUMS_ERROR,
        payload: err
    }
}

export const getStates = () => {
    return dispatch => {
        dispatch(getEnumLoading())
        return EnumServices.getStates().then(res => {
            dispatch(getStatesLoaded(res.data));
            return res;
        }).catch(err => {
            dispatch(getEnumError(err));
            throw err;
        })
    }
}

export const getCities = (state) => {
    return dispatch => {
        dispatch(getEnumLoading())
        return EnumServices.getCities(state).then(res => {
            dispatch(getCitiesLoaded(res.data));
            return res;
        }).catch(err => {
            dispatch(getEnumError(err));
            throw err;
        })
    }
}