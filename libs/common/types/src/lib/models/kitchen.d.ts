import { OrderType } from './order';
export interface Kitchen {
    id?: number;
    name: string;
    printer: string;
    shouldPrintKot: boolean;
}
export declare enum KotStatus {
    INPROGRESS = "inprogress",
    READY = "ready"
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
    isNew?: boolean;
    kotItems: KotItem[];
}
export interface KotItem {
    name: string;
    amount: number;
    message: string;
    orderItemType: string;
    customeKey: string;
    count: number;
}
