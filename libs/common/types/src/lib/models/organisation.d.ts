import { FormatedCountry } from './countries';
import { Category, Product } from './product';
import { TableSection } from './table';
import { Tax } from './taxes';
export interface Organisation {
    id: number;
    name: string;
    secondaryLanguageName?: string;
    caption: string;
    type?: string[];
    address: string;
    coord?: string[];
    license?: string;
    openAllWeek?: boolean;
    offDays?: string[];
    products?: Product[];
    categories?: Category[];
    tableSections?: TableSection[];
    isRegistrationComplete?: boolean;
    taxes?: Tax[];
    customerShortcuts?: string[];
    productShortcuts?: string[];
    currencyCode?: string;
    country?: FormatedCountry;
    decimalZeros?: number;
    printer?: string;
    password?: string;
}
export declare enum CompanyShortcutTypes {
    PRODUCTSHORTCUTS = "productshortctus",
    CUSTOMERSHORTCUTS = "customershortcuts"
}
