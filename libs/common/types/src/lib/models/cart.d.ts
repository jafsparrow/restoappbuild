import { OrderItemEdit } from './order';
import { Modifier, Product, Variant } from './product';
import { Tax } from './taxes';
import { User } from './user';
export interface CartItem {
    count: number;
    product: Product;
    modifiers?: Modifier[];
    variant?: Variant | null;
    key?: string;
    sortOrder?: number;
    note?: string;
    customeKey?: string;
}
export interface Cart {
    createdAt?: Date;
    cartCreatedFor?: User | null;
    cartItems: {
        [key: string]: CartItem;
    };
    orderItemsEdit: {
        [key: string]: OrderItemEdit;
    };
    resultantCartItems: ResultantCartItem[];
    placeOrderSpinner: boolean;
    createdBy?: User;
    taxes?: Tax[];
    note?: string;
    tableId?: number;
    customerId?: number;
    existingOrderId?: number;
    printKot?: boolean;
    deliveryUserId?: number;
}
export interface ResultantCartItem {
    key: string;
    name: string;
    product: Product;
    amount: number;
    originalCount: number;
    count: number;
    message: string;
    modifiers?: Modifier[];
    variant?: Variant | null;
    cartItemType: CartItemType;
    sortOrder: number;
    note?: string;
}
export declare enum CartItemType {
    NEW = "N",
    EDIT = "E",
    DELETE = "D"
}
