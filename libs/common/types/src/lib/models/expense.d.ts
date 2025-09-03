export interface ExpenseType {
    id: number;
    name: string;
    expenses?: Expense[];
}
export interface Expense {
    expenseTypeId?: number;
    description?: string;
    realizedDate: Date;
    amount: number;
    paidFromCash: boolean;
    expenseType?: ExpenseType;
}
