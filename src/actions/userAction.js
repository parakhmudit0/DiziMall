import UserService from '../services/userServices';
import * as actionTypes from './actionTypes';



const getDetailLoading = () => {
    return {
        type: actionTypes.GET_DETAIL_LOADING
    }
}
const getDetailLoaded = data => {
    return {
        type: actionTypes.GET_DETAIL_LOADED,
        payload:data
    }
}
const getDetailError = err => {
    return {
        type: actionTypes.GET_DETAIL_ERROR,
        payload: err
    }
}

export const getUserDetail = ()=>{
    return dispatch=> {
        dispatch(getDetailLoading())
        return UserService.getDetail().then(res=>{
            dispatch(getDetailLoaded(res.data));
            return res;
        }).catch(err => {
            dispatch(getDetailError(err));
            throw err;
        })
    }
}