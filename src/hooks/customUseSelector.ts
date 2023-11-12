import {RootState} from "../store/reducers";
import {useSelector, TypedUseSelectorHook} from "react-redux";

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;