import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../Action";

const initialState = {
  loading: false,
  users: {
    name: null,
    image: null,
    repo: null,
  },
  error: "",
};

const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: {
          name: action.payload.name,
          image: action.payload.image,
          repo: action.payload.repo,
        },
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
