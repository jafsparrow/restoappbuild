import { FormatedCountry } from './countries';
export declare enum UserType {
    ADMIN = "admin",
    ONLINE = "online",
    TABLE = "table",
    STAFF = "staff",
    TAKEAWAY = "takeaway",
    HOMEDELIVERY = "homedelivery"
}
export interface User {
    id?: number;
    email?: string;
    companyId?: string;
    name?: string;
    phone?: string;
    firstName: string;
    lastName?: string;
    username?: string;
    userType: UserType;
    token?: string;
    country?: FormatedCountry;
    isAdmin?: boolean;
    isCashier?: boolean;
    isWaiter?: boolean;
    isKitchenUser?: boolean;
    isHomeDeliveryUser?: boolean;
    password?: number;
}
export interface LoginData {
    username: string;
    password: string;
}
