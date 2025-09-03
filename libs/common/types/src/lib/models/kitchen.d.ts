import { OrderType } from './order';
export interface Kitchen {
    id?: number;
    name: string;
    printer: string;
    shouldPrintKot: boolean;
}
export declare enum KotStatus {
    INPROGRESS = "inprogress",
    READY = "ready",
    SERVED = "served"
}
export interface Kot {
    kotid: number;
    createdAt: Date;
    updatedAt: Date;
    createdUserName: string;
    createdUserId: number;
    kitchenId: number;
    status: KotStatus;
    orderId: number;
    orderNumber: number;
    orderType: OrderType;
    customerName: string;
    isNew?: boolean;
    kotItems: KotItem[];
    note?: string;
}
export interface KotItem {
    name: string;
    amount: number;
    message: string;
    orderItemType: string;
    customeKey: string;
    count: number;
    note?: string;
}
