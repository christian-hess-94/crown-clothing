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

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id); //verifica se o item já existe na lista baseado no ID (unico)
    if (!!existingCartItem && existingCartItem.quantity > 1) {
        //Se existir, atualiza o parametro "quantity" daquele item para ser subtraido em um (caso haja mais de um)
        return cartItems.map(
            cartItem => cartItem.id === cartItemToDecrease.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem)
    } else if (existingCartItem.quantity === 1) {
        return removeItemFromCart(cartItems, cartItemToDecrease)
    }

    return [...cartItems] //se não existir, retorna a lista atual
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const newCartItems = cartItems.filter((cartItem) => cartItem !== cartItemToRemove)
    return [...newCartItems]
}