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

const getClientLoading = () => {
    return {
        type: actionTypes.GET_CLIENT_LOADING
    }
}
const getClientLoaded = data => {
    return {
        type: actionTypes.GET_CLIENT_LOADED,
        payload:data
    }
}
const getClientError = err => {
    return {
        type: actionTypes.GET_CLIENT_ERROR,
        payload: err
    }
}

export const getAllClient = ()=>{
    return dispatch=> {
        dispatch(getClientLoading())
        return UserService.getAllClient().then(res=>{
            dispatch(getClientLoaded(res.data));
            return res;
        }).catch(err => {
            dispatch(getClientError(err));
            throw err;
        })
    }
}

export const sendContact=(data)=>{
    return UserService.sendConatct(data);
}