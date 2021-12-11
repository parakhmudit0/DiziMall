// Local Application Imports
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
    loading: false,
    stateEnums: [],
    cityEnums:[],
    error:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_ENUMS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_STATES_LOADED:
            return {
                ...state,
                loading: false,
                stateEnums: action.payload
            }
        case actionTypes.GET_CITIES_LOADED:
            return {
                ...state,
                loading: false,
                cityEnums: action.payload
            }
        case actionTypes.GET_ENUMS_ERROR:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
};