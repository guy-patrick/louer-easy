import { all, call } from "redux-saga/effects";
import { resultsSagas } from "./results/results.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
  yield all([call(resultsSagas), call(userSagas)]);
}
