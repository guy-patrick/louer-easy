import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "../../redux/user/user.actions";
import { userTypes } from "./user.types";

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_OUT_START,
  CHECK_USER_SESSION,
} = userTypes;

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
