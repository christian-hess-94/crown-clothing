export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); //verifica se o item já existe na lista baseado no ID (unico)
    if (!!existingCartItem) {
        //Se existir, atualiza o parametro "quantity" daquele item para ser somado em um
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] //se não existir, adiciona novo item no array com quantity = 1
}