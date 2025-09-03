import { Modifier, Product } from './product';
import { Customer } from './table';
import { AppliedTaxInfo } from './taxes';
import { User } from './user';
export interface OrderItem {
    count: number;
    modifiers?: Modifier[];
    id?: number;
    status: OrderItemStatus;
    name?: string;
    kitchenUser?: User;
    key?: string;
    totalCountOfSameItem?: number;
    orderId?: string;
    orderNumber?: number;
    orderItemType?: OrderItemType;
    amount?: number;
    customeKey?: string;
    product?: Product;
    notes?: string[];
}
export interface OrderSummary {
    id: number;
    orderNumber?: number;
    createdAt?: Date;
    updatedAt?: Date;
    orderStatus: OrderStatus | string;
    paymentStatus?: PaymentStatus;
    orderItems?: OrderItem[];
    createdBy?: User;
    createdFor?: User;
    orderType?: string;
    customerName?: string | null;
    customer?: Customer;
    totalItemsCount?: number;
    totalQuantityCount?: number;
    appliedTaxes?: AppliedTaxInfo[];
    totalAmount?: number;
    taxedTotal?: number;
    customerId?: number;
    tableId?: number;
    createdUserId?: number;
    user?: User;
    deliveryUserId?: number;
    kot?: any[];
}
export declare enum OrderType {
    TABLE = "table",
    TAKEAWAY = "takeaway",
    HOMEDELIVERY = "homedelivery"
}
export declare enum OrderItemStatus {
    READY = "ready",
    INPROGRESS = "inprogress",
    WAITING = "waiting"
}
export declare enum OrderStatus {
    PLACED = "placed",
    INPROGRESS = "inprogress",
    READY = "ready",
    SERVED = "served",
    DELIVERED = "delivered",
    PAID = "paid",
    CANCELLED = "cancelled"
}
export declare enum OrderItemType {
    NEW = "new",
    RUNNING = "running"
}
export declare enum PaymentStatus {
    PAID = "paid",
    NOTPAID = "notpaid",
    CREDIT = "credit"
}
export interface OrderStat {
    count: number;
    sum: number;
    paystat: PaymentStatus;
}
export interface StaffStat {
    name: string;
    id: number;
    orderCount: number;
}
export interface OrderItemEdit {
    orderItem: OrderItem;
    count: number;
    originalCount: number;
}
export interface PaymentDetails {
    paidAmount: number;
    discount: number;
    balance: number;
    mode: string;
}
