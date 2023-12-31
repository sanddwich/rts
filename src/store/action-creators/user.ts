import {Dispatch} from "redux";
import {UserActionType} from "../../interfaces/users/UserActionType";
import UserActionTypes from "../../interfaces/users/UserActionTypes";
import axios from "axios";

export const fetchUsers = (): any => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS
            });
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data
                });
            }, 1000)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "Ошибка обращения к серверу!"
            });
        }
    }
}