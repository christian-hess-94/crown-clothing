import { all, call } from 'redux-saga/effects'
// import { fetchCollectionsStartInterceptor } from './shop/shop.sagas'
import userSagas from './user/user.sagas'
import shopSagas from './shop/shop.sagas'
import cartSagas from './cart/cart.sagas'

export default function* rootSaga() {
    yield all([ //permite que os sagas possam ser executar de maneira concurrente (ao invés de sequencial)
        // call(fetchCollectionsStartInterceptor),
        call(shopSagas),
        call(userSagas),
        call(cartSagas),
    ])
}