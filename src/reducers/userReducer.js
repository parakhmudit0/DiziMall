// Local Application Imports
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
    loading: false,
    data: [],
    error:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_DETAIL_LOADING:
            return {
                ...state,
                loading: true,
                data: {},
                error:null
            }
        case actionTypes.GET_DETAIL_LOADED:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error:null
            }
        case actionTypes.GET_DETAIL_ERROR:
            return {
                ...state,
                loading:false,
                data: {},
                error:action.payload
            }
        default:
            return state;
    }
};