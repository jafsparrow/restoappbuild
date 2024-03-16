import { AppliedTaxInfo, OrderItem, Tax } from '@hotel/common/types';
export declare function commonUtil(): string;
export declare const getOrderItemsTotal: (orderItems: OrderItem[]) => number;
export declare const getAppliedTaxesAndTaxesTotal: (total: number, taxes: Tax[]) => {
    taxesApplied: AppliedTaxInfo[];
    taxedTotal: number;
};
export declare const getTaxedSubTotal: (total: number, tax: Tax) => number;
export declare const dateTimeToDateHHMM: (dateTime: Date) => string;
export declare const dateTimeNowMinus: (hoursToSubtract: number) => Date;
export declare const timesAgoFormat: (datetime: string) => string | null;
export declare const getStartOfTheDay: () => Date;
export declare const getStartOfTheWeek: () => Date;
export declare const getStartOfTheMonth: () => Date;
export declare const getOnlyCurrentDateWithoutTime: () => string;
export declare const aggregateOrderItems: (orderItems: OrderItem[]) => {
    aggregated: OrderItem[];
    totalAmount: number;
    totalQuantityCount: number;
    totalItemsCount: number;
};
