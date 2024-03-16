"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultantCartItems = exports.getCartItemNameFromVariant = exports.getCartItemTotalFromVariantAndModifiers = void 0;
const types_1 = require("@hotel/common/types");
const getCartItemTotalFromVariantAndModifiers = (cartItem) => {
    let productPrice = cartItem.variant
        ? cartItem.variant.price
        : cartItem.product.price;
    if (cartItem.modifiers) {
        productPrice =
            productPrice +
                cartItem.modifiers.reduce((prev, modifier) => prev + modifier.price, 0);
    }
    return productPrice;
};
exports.getCartItemTotalFromVariantAndModifiers = getCartItemTotalFromVariantAndModifiers;
const getCartItemNameFromVariant = (cartItem) => {
    return (cartItem.product.name +
        (cartItem.variant ? '-' + cartItem.variant.name : ''));
};
exports.getCartItemNameFromVariant = getCartItemNameFromVariant;
const getResultantCartItems = (cartItemObj, orderEditItemsObj) => {
    const cartItems = Object.values(cartItemObj);
    const orderItemEdits = Object.values(orderEditItemsObj);
    const resultantCartItemsArray = [];
    if (!orderItemEdits.length && !cartItems.length) {
        console.log('both zero return');
        return [];
    }
    // compare each key with key in orderEdit.
    if (cartItems.length) {
        console.log('cart items have somethign in it.');
        Object.entries(cartItemObj).map((item) => {
            const [key, cartItem] = item;
            const currentCountInCart = cartItem.count;
            if (orderEditItemsObj[key]) {
                console.log('current cart item is in the order edit');
                const orderEdit = orderEditItemsObj[key];
                const originalCount = orderEdit.orderItem.count;
                const updatedOrderEditCount = orderEdit.count;
                const resultantCount = updatedOrderEditCount + currentCountInCart;
                console.log('result count', resultantCount);
                if (resultantCount <= 0) {
                    // this condition is equivalent to deleting the time.
                    const resultantCartItem = {
                        amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                        cartItemType: types_1.CartItemType.DELETE,
                        count: resultantCount,
                        key: key,
                        message: '0',
                        name: (0, exports.getCartItemNameFromVariant)(cartItem),
                        originalCount: originalCount,
                        product: cartItem.product,
                        modifiers: cartItem.modifiers,
                        variant: cartItem.variant,
                        sortOrder: cartItem.sortOrder || 0,
                    };
                    resultantCartItemsArray.push(resultantCartItem);
                    delete orderEditItemsObj[key];
                }
                else {
                    // this is a new item which is adding.
                    const resultantCartItem = {
                        amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                        cartItemType: types_1.CartItemType.NEW,
                        count: resultantCount,
                        key: key,
                        message: `${resultantCount}`,
                        name: (0, exports.getCartItemNameFromVariant)(cartItem),
                        originalCount: originalCount,
                        product: cartItem.product,
                        modifiers: cartItem.modifiers,
                        variant: cartItem.variant,
                        sortOrder: cartItem.sortOrder || 0,
                    };
                    resultantCartItemsArray.push(resultantCartItem);
                }
                // else {
                //   // this means negative resultant. item is edited from one count to other.
                //   const resultantCartItem: ResultantCartItem = {
                //     amount: getCartItemTotalFromVariantAndModifiers(cartItem),
                //     cartItemType: CartItemType.EDIT,
                //     count: resultantCount,
                //     key: key,
                //     message: 'Edited an Item',
                //     name: getCartItemNameFromVariant(cartItem),
                //     originalCount: originalCount,
                //     product: cartItem.product,
                //     modifiers: cartItem.modifiers,
                //     variant: cartItem.variant,
                //   };
                //   resultantCartItemsArray.push(resultantCartItem);
                // }
            }
            else {
                console.log('only cartitems have items');
                const resultantCartItem = {
                    amount: (0, exports.getCartItemTotalFromVariantAndModifiers)(cartItem),
                    cartItemType: types_1.CartItemType.NEW,
                    count: cartItem.count,
                    key: key,
                    message: `${cartItem.count}`,
                    name: (0, exports.getCartItemNameFromVariant)(cartItem),
                    originalCount: cartItem.count,
                    product: cartItem.product,
                    modifiers: cartItem.modifiers,
                    variant: cartItem.variant,
                    sortOrder: cartItem.sortOrder || 0,
                };
                resultantCartItemsArray.push(resultantCartItem);
            }
        });
    }
    if (orderItemEdits.length) {
        console.log('only order edit has items');
        Object.entries(orderEditItemsObj).map((item) => {
            const [key, orderItemEditItem] = item;
            const finalCount = orderItemEditItem.orderItem.count + orderItemEditItem.count;
            let resultantCartItem = {
                amount: orderItemEditItem.orderItem.amount || 0,
                cartItemType: types_1.CartItemType.NEW,
                count: orderItemEditItem.count,
                key: key,
                message: `${orderItemEditItem.orderItem.count}->${orderItemEditItem.count} `,
                name: orderItemEditItem.orderItem.name || 'No name',
                originalCount: orderItemEditItem.orderItem.count,
                product: orderItemEditItem.orderItem.product,
                modifiers: orderItemEditItem.orderItem.modifiers,
                sortOrder: 0,
            };
            if (finalCount > orderItemEditItem.orderItem.count) {
                // add a new item.
                resultantCartItem = Object.assign(Object.assign({}, resultantCartItem), { cartItemType: types_1.CartItemType.NEW, message: `${orderItemEditItem.count}` });
            }
            else if (finalCount <= 0) {
                // item deleted.
                resultantCartItem = Object.assign(Object.assign({}, resultantCartItem), { cartItemType: types_1.CartItemType.DELETE, message: `${orderItemEditItem.orderItem.count}-0` });
            }
            else {
                // item counted edit to a less value.
                resultantCartItem = Object.assign(Object.assign({}, resultantCartItem), { count: orderItemEditItem.count, cartItemType: types_1.CartItemType.EDIT, message: `${orderItemEditItem.orderItem.count}-${finalCount}` });
            }
            // const resultantCartItem: ResultantCartItem = {
            //   amount: orderItemEditItem.orderItem.amount || 0,
            //   cartItemType: finalCount <= 0? CartItemType.DELETE : CartItemType.EDIT,
            //   count: orderItemEditItem.count,
            //   key: key,
            //   message: `${orderItemEditItem.orderItem.count}->${orderItemEditItem.count} `,
            //   name: orderItemEditItem.orderItem.name || 'No name',
            //   originalCount: orderItemEditItem.orderItem.count,
            //   product: orderItemEditItem.orderItem.product!,
            //   modifiers: orderItemEditItem.orderItem.modifiers!,
            // };
            resultantCartItemsArray.push(resultantCartItem);
        });
    }
    console.log('resultatn', resultantCartItemsArray);
    return resultantCartItemsArray.sort((a, b) => a.sortOrder - b.sortOrder);
};
exports.getResultantCartItems = getResultantCartItems;
//# sourceMappingURL=cartItems.util.js.map