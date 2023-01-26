import { ADD_USER, LOGIN_SUCCESS, USER_ALL, USER_BY_ID, USER_DELETE } from "../actions/ActionConstants";

const initialState = {
   newUser:null,
   loggedInUser:null,
    isLoggedIn:false,
    users:[],
    user:null
    

}
export default function userReducer(state = initialState, action) {

    if (action.type === ADD_USER) {
        console.log(action.payload);
        return ({
            ...state,
            newUser: action.payload
        })
    }
    if (action.type === USER_ALL) {
        console.log(action.payload);
        return ({
            ...state,
            users: action.payload
        })
    }
    if (action.type === USER_DELETE) {
        console.log(action.payload);
        return ({
            ...state,
            user: action.payload
        })
    }
    if (action.type === USER_BY_ID) {
        console.log(action.payload);
        return ({
            ...state,
            user: action.payload
        })
    }
    
    else {
        return state;
    }

}