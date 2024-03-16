import { CartItem, OrderItemEdit, ResultantCartItem } from '@hotel/common/types';
export declare const getCartItemTotalFromVariantAndModifiers: (cartItem: CartItem) => number;
export declare const getCartItemNameFromVariant: (cartItem: CartItem) => string;
export declare const getResultantCartItems: (cartItemObj: {
    [key: string]: CartItem;
}, orderEditItemsObj: {
    [key: string]: OrderItemEdit;
}) => ResultantCartItem[];
