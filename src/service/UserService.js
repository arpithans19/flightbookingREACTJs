import axios from "axios";
import { USER_URL } from "../store/actions/ActionConstants";

export function addUserService(user){
    return axios.post(USER_URL+"/user/save",user);
}
export function fetchAllUserService() {
    return axios.get(USER_URL + "/user/all");

}
export function fetchUserByIdService(id) {
    return axios.get(USER_URL + "/user/find/" + id);
}
export function deleteUserByIdService(id) {
    return axios.delete(USER_URL + "/user/delete/" + id);

}

