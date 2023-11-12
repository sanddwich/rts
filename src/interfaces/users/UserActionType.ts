import {FetchUserAction, FetchUserActionError, FetchUserActionSuccess} from "./UserActions";

export type UserActionType = FetchUserAction
    | FetchUserActionError
    | FetchUserActionSuccess