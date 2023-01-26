import { loginService } from "../../service/LoginService";
import { LOGIN_SUCCESS } from "./ActionConstants";

export function doLogin(payload) {
    return (dispatch) => {
        return loginService(payload).then(
            resp => {
                console.log(resp);                
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
            })
    }
}
export function doLoginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}