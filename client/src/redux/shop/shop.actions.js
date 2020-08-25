import ShopActionTypes from './shop.types'


//todas as actions que podem ser interceptadas pelo arquivo SAGAS
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})
export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//############### THUNK ###############

/**
 * Função a ser usada pelo Redux-Thunk
 *
 * Redux-thunk reconhece quando a Action retorna uma function e passa o parâmetro dispatch do Redux como primeiro argumento
 * Esse parametro dispatch é usado dentro da função para disparar Actions ao Redux que alteram o state em relação a execução
 *
 * Apenas funciona se redux-thunk for um middleware ativado.
 * Caso não haja redux-thunk, a Actions apenas podem retornar ActionObject que possuem os parâmetros "type" e "payload".
 */
// export const fetchCollectionsStartAsync = () => dispatch => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart())
//     collectionRef.get()
//         .then((snapshot) => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             console.log(collectionsMap);

//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         })
//         .catch((error) => {
//             dispatch(fetchCollectionsFailure(error.message))
//         })
// }



