enum AppActionTypes {
    SET_APP_LOADING = "SET_APP_LOADING"
}

interface AppSetLoadingInterface {
    type: AppActionTypes.SET_APP_LOADING
    payload: boolean
}

type AppActionInterfacesType = AppSetLoadingInterface

interface AppStateInterface {
    loading: boolean
}

const initialState: AppStateInterface = {
    loading: false
}

export const appReducer = (
    state: AppStateInterface = initialState, action: AppActionInterfacesType
): AppStateInterface => {
    switch (action.type) {
        case AppActionTypes.SET_APP_LOADING:
            return {loading: action.payload}
        default: return state
    }
}