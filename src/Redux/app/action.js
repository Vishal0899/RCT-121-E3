

export const actionTypes = {
    // key value pair
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESE: "GET_USER_SUCCESE",
    GET_USER_FAILURE: "GET_USER_FAILURE",

};
// do not change names
export const addUserRequest = () => {
    type: actionTypes.GET_USER_REQUEST
};
// do not change names, and arguments
export const addUserSuccess = (data) => {
    type: actionTypes.GET_USER_SUCCESE
    payload: data
};
// do not change names
export const addUserFailure = () => {
    type: actionTypes.GET_USER_FAILURE
};
