import { takeLatest, call, put } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';


//Configura a interceptação desta Action apenas
export function* fetchCollectionsStartInterceptor() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        function* () {//Executa o método com a lógica
            try {
                const collectionRef = firestore.collection("collections");
                const snapshot = yield collectionRef.get();
                const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
                //Chama outras actions quando necessario
                yield put(fetchCollectionsSuccess(collectionsMap))
            } catch (error) {
                //Chama outras actions quando necessario
                yield put(fetchCollectionsFailure(error.message))
            }
        }
    )
}

//Método com a lógica
export function* fetchCollectionsAsync() {

}