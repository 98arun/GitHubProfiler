export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = (params: any) => {
  // console.log("@@LN6", params);
  return {
    type: FETCH_USERS_REQUEST,
    payload: params,
  };
};

export const fetchUsersSuccess = (users: any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error: any) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
