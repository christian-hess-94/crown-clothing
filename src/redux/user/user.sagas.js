import { takeLatest, put, all, call } from 'redux-saga/effects'
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, emailSignInStart, signUpFailure, signUpSuccess } from './user.actions'
import UserActionTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { clearCart } from '../cart/cart.actions'


export function* checkUserSessionInterceptor() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, function* () {
        try {
            const userAuth = yield getCurrentUser();
            if (!userAuth) return
            yield call(getSnapshot, userAuth)
        } catch (error) {
            yield put(signInFailure(error))
        }
    })
}

function* getSnapshot(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}


function* googleSignInStartInterceptor() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        function* () {
            try {
                const { user } = yield auth.signInWithPopup(googleProvider)
                yield call(getSnapshot, user)
            } catch (error) {
                yield put(signInFailure(error))
            }
        })
}

function* emailSignInStartInterceptor() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        function* ({ payload: { email, password } }) {
            try {
                const { user } = yield auth.signInWithEmailAndPassword(email, password);
                yield call(getSnapshot, user)
            } catch (error) {
                yield put(signInFailure(error))
            }
        })
}

function* signOutStartInterceptor() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        function* () {
            try {
                yield auth.signOut()
                yield put(clearCart())
                yield put(signOutSuccess())
            } catch (error) {
                yield put(signOutFailure(error))

            }
        }
    )
}

function* signUpStartInterceptor() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        function* ({ payload: { displayName, email, password, confirmPassword, } }) {
            if (password !== confirmPassword) {
                yield console.log("Passwords don't match!");
                return;
            }
            yield console.log("PAsswords match");

            try {
                const { user } = yield auth.createUserWithEmailAndPassword(
                    email,
                    password
                );

                yield createUserProfileDocument(user, { displayName });
                yield console.log("Going to Sign up succes interceptor");
                yield put(signUpSuccess({ email, password }))
            } catch (error) {
                yield put(signUpFailure(error))
            }
        }
    )
}


function* singUpSuccessInterceptor() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        function* ({ payload }) {
            yield console.log(payload);

            yield put(emailSignInStart(payload))
        })
}
export default function* userSagas() {
    yield all([
        //session
        call(checkUserSessionInterceptor),
        //sign in
        call(googleSignInStartInterceptor),
        call(emailSignInStartInterceptor),
        //sign out
        call(signOutStartInterceptor),
        //sign up
        call(signUpStartInterceptor),
        call(singUpSuccessInterceptor),
    ])
}