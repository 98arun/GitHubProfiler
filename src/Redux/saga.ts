import { call, put, takeLatest } from "redux-saga/effects";
import { GetRequest } from "../Utilites/Network";
import { BASE_URL } from "../Utilites/Network/url";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  FETCH_USERS_REQUEST,
} from "./Action";

function* getFetchUser(action: any): any {
  try {
    // Prepare query
    // console.log("@LN13", action);

    // const { searchInput } = action.payload;
    const URL = `${BASE_URL}${action.payload}`;
    // console.log("@LN15", URL);

    // Dispatch API request
    const profileResponse = yield GetRequest(URL);
    // console.log("@LN19", profileResponse);

    // Handle validation of response
    if (!profileResponse || Object.keys(profileResponse).length === 0) {
      alert("You Entered Wrong UserID");

      yield put(fetchUsersFailure(profileResponse));
      return;
    }

    // Format the data
    const { avatar_url, name, repos_url } = profileResponse;

    // Dispatch API request for repository response
    const repoResponse = yield GetRequest(repos_url);
    // console.log("@LN33", repoResponse);

    if (!repoResponse || Object.keys(repoResponse).length === 0) {
      alert("You Entered Wrong UserID");
      yield put(fetchUsersFailure(repoResponse));
      return;
    }
    const users = {
      name: name,
      image: avatar_url,
      repo: repoResponse,
    };
    // console.log("@LN44", users);

    yield put(fetchUsersSuccess(users));
    return;
  } catch (e: any) {
    yield put(fetchUsersFailure(e));
  }
}

function* mySaga() {
  yield takeLatest(FETCH_USERS_REQUEST, getFetchUser);
}

export default mySaga;
