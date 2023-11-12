import UserActionTypes from "./UserActionTypes";

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

export interface FetchUserActionSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

export interface FetchUserActionError {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}