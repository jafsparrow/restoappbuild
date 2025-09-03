export interface PaymentBreakup {
    paymentTypeId: number;
    isSelected?: boolean;
    amount: number;
    name: string;
}
export interface PaymentType {
    id: number;
    name: string;
    isDebit: boolean;
}
