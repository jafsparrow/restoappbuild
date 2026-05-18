import { DateTime } from 'luxon';
export function commonUtil() {
    return 'common-util';
}
export const getOrderItemsTotal = (orderItems) => {
    const totalOfOderItems = +Object.values(orderItems).reduce((tot, orderItem) => {
        return tot + orderItem.amount;
    }, 0);
    return +totalOfOderItems.toFixed(3);
};
export const getAppliedTaxesAndTaxesTotal = (total, taxes) => {
    const taxAppliedInfo = {
        taxesApplied: taxes?.map((tax) => {
            return {
                taxName: tax.printName,
                value: getTaxedSubTotal(total, tax),
            };
        }),
        taxedTotal: taxes?.reduce((a, b) => a + getTaxedSubTotal(total, b), total),
    };
    return taxAppliedInfo;
};
export const getTaxedSubTotal = (total, tax) => {
    if (tax.isPercentage) {
        return +(total * 0.01 * tax.value);
    }
    else {
        return +tax.value;
    }
};
export const dateTimeToDateHHMM = (dateTime) => DateTime.fromJSDate(dateTime).toLocaleString(DateTime.DATETIME_SHORT);
export const dateTimeNowMinus = (hoursToSubtract) => {
    return DateTime.now().minus({ hour: hoursToSubtract }).toJSDate();
};
export const timesAgoFormat = (datetime) => DateTime.fromISO(datetime).toRelative();
export const getStartOfTheDay = () => DateTime.now().startOf('day').toJSDate();
export const getStartOfTheWeek = () => DateTime.now().startOf('week').toJSDate();
export const getStartOfTheMonth = () => DateTime.now().startOf('month').toJSDate();
export const getOnlyCurrentDateWithoutTime = () => DateTime.now().toLocaleString(DateTime.DATE_SHORT);
export const aggregateOrderItems = (orderItems) => {
    let totalQuantityCount = 0;
    let totalItemsCount = 0;
    let totalAmount = 0;
    const itemObj = {};
    orderItems.forEach((orderItem) => {
        const key = orderItem.customeKey;
        itemObj[key] = {
            ...(itemObj[key] || {}),
            ...{
                ...orderItem,
                id: itemObj[key] ? itemObj[key].id : orderItem.id, // This step is neeed to keep the sort order if item had edit later on but still need to keep order at the top even had edits
                count: itemObj[key]
                    ? itemObj[key].count + orderItem.count
                    : orderItem.count,
            },
        };
    });
    // Sort is needed to fix the unordered keys of the object. this is making order of items displayed on the screen not in the order it was created.
    const aggregatedOrderItemsArr = Object.values(itemObj).sort((a, b) => {
        if (a.id && b.id) {
            return a.id - b.id;
        }
        return 0;
    });
    Object.values(itemObj).forEach((item) => {
        totalQuantityCount = totalQuantityCount + item.count;
        totalItemsCount = totalItemsCount + 1;
        totalAmount = totalAmount + item.count * item.amount;
    });
    return {
        aggregated: aggregatedOrderItemsArr,
        totalAmount,
        totalQuantityCount,
        totalItemsCount,
    };
};
//# sourceMappingURL=common-util.js.map