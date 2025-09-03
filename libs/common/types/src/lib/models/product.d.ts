import { Kitchen } from './kitchen';
export interface Category {
    id: number;
    menuId?: string;
    accountId?: string;
    name: string;
    description?: string;
    archived: boolean;
    products?: Product[] | null;
    alwaysOpen: boolean;
    day?: null;
    openTime?: null;
    closeTime?: null;
    openAllDay?: null;
    hours?: null[] | null;
    adminIndex?: number;
    categoryCode?: number;
    kitchen?: Kitchen;
}
export interface Product {
    id: number;
    name: string;
    secondaryLanguageName?: string;
    description?: string;
    price: number;
    cost?: number;
    image: string;
    inStock?: boolean;
    hasVariant?: boolean;
    hasModifiers?: boolean;
    isArchived?: boolean;
    isAvailable?: boolean;
    onSale?: boolean;
    categoryId: number;
    archived: boolean;
    video?: string;
    popular?: boolean;
    printName?: string;
    modifierGroups?: ModifierGroup[] | null;
    variants?: Variant[] | null;
    indexInCategory?: number;
    qwickViewOrder?: number;
    code?: number;
    notes?: string[];
}
export interface Variant {
    id?: number;
    name: string;
    price: number;
    productId?: number;
}
export interface ProductImage {
    storageName: string;
    downloadUrl: string;
}
export interface ModifierGroup {
    id?: number;
    description?: string;
    price?: number;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
    printName?: string;
    printModifiersAsItems?: boolean;
    modifiers?: Modifier[];
}
export interface Modifier {
    name: string;
    price: number;
    id?: number;
    modifierGroupId?: number;
}
export type CategoryViseProducts = {
    [Key: string]: Product[];
};
export interface ProductSortData {
    _id: string;
    indexInCategory: number;
}
export interface ProductBoolFieldUpdateData {
    fieldName: string;
    value: boolean;
}
export interface ProductStat {
    count: number;
    name: string;
}
