import { actionTypes } from "./action";

const initState = {
    loading: false,
    user: [{
        email: "ketan",
        password: "1234",
        status: false
    }],
    error: false,
    isAuth: false,
    token: null
};

function reducer(state = initState, action) {
    // write code here
    switch (action.type) {
        case actionTypes.GET_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actionTypes.GET_USER_SUCCESE: {
            return {
                ...state,
                loading: false,
                user: action.payload

            }
        }
        case actionTypes.GET_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
    }
}

export default reducer;
