import UserStateInterface from "../../interfaces/users/UserStateInterface";
import UserActionTypes from "../../interfaces/users/UserActionTypes";
import {UserActionType} from "../../interfaces/users/UserActionType";

const initialState: UserStateInterface = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: UserActionType): UserStateInterface => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {users: [], error: null, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, error: null, loading: false}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {users: [], error: action.payload, loading: false}
        default:
            return state;
    }
}

export default userReducer;