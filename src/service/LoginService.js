import axios from "axios";
import { LOGIN_URL } from "../store/actions/ActionConstants";

export function loginService(payload){
    return axios.post(LOGIN_URL+"/authenticate",payload);
}