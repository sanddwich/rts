import {combineReducers} from "redux";
import userReducer from "./userReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
});

export type RootState = ReturnType<typeof rootReducer>