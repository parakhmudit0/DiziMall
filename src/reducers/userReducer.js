// Local Application Imports
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
    loading: false,
    data: [],
    error:null,
    clientLoading:false,
    clientData:[],
    clientError:null
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
            case actionTypes.GET_CLIENT_LOADING:
                return {
                    ...state,
                    clientLoading: true,
                    clientData: {},
                    clientError:null
                }
            case actionTypes.GET_CLIENT_LOADED:
                return {
                    ...state,
                    clientLoading: false,
                    clientData: action.payload,
                    clientError:null
                }
            case actionTypes.GET_CLIENT_ERROR:
                return {
                    ...state,
                    clientLoading:false,
                    clientData: {},
                    clientError:action.payload
                }    
        default:
            return state;
    }
};