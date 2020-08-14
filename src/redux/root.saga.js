import { all, call } from 'redux-saga/effects'
import { fetchCollectionsStartInterceptor } from './shop/shop.sagas'

export default function* rootSaga() {
    yield all([ //permite que os sagas possam ser executar de maneira concurrente (ao invés de sequencial)
        call(fetchCollectionsStartInterceptor)
    ])
}