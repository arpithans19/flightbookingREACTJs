import axios from "axios";
import { addUserService, deleteUserByIdService, fetchAllUserService, fetchUserByIdService, loginService } from "../../service/UserService";
import { ADD_USER, LOGIN, LOGIN_SUCCESS, USER_ALL, USER_BY_ID, USER_DELETE } from "./ActionConstants";

export function addUser(user) {
        
    return (dispatch) => {

        return addUserService(user).then(
            resp => {
                dispatch(addUserSuccess(resp.data));
                alert("User added succesfully!!!");


            }
        )
    }
}
export function addUserSuccess(data) {
    return {
        type: ADD_USER,
        payload: data
    }
}



export function deleteUser(id) {
    return (dispatch) => {
        return deleteUserByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getDeleteUserByIdSuccess(resp.data));

        })

    }
}
export function getDeleteUserByIdSuccess(data) {
    return {
        type: USER_DELETE,
        payload: data
    }
}


export function getAllUsers() {

    return (dispatch) => {
        return fetchAllUserService().then(
            resp => {
                
                dispatch(
                    getAllUsersSuccess(resp.data)
                );

            }
        )
    }
}

export function getAllUsersSuccess(data) {
    return {
        type: USER_ALL,
        payload: data
    }
}

export function getUserById(id) {
    return (dispatch) => {
        return fetchUserByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getUserByIdSuccess(resp.data))

        })
    }
}
export function getUserByIdSuccess(data) {
    return {
        type: USER_BY_ID,
        payload: data
    }
}
