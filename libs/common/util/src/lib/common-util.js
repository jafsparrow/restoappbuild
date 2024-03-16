"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateOrderItems = exports.getOnlyCurrentDateWithoutTime = exports.getStartOfTheMonth = exports.getStartOfTheWeek = exports.getStartOfTheDay = exports.timesAgoFormat = exports.dateTimeNowMinus = exports.dateTimeToDateHHMM = exports.getTaxedSubTotal = exports.getAppliedTaxesAndTaxesTotal = exports.getOrderItemsTotal = exports.commonUtil = void 0;
const luxon_1 = require("luxon");
function commonUtil() {
    return 'common-util';
}
exports.commonUtil = commonUtil;
const getOrderItemsTotal = (orderItems) => {
    const totalOfOderItems = +Object.values(orderItems).reduce((tot, orderItem) => {
        return tot + orderItem.amount;
    }, 0);
    return +totalOfOderItems.toFixed(3);
};
exports.getOrderItemsTotal = getOrderItemsTotal;
const getAppliedTaxesAndTaxesTotal = (total, taxes) => {
    const taxAppliedInfo = {
        taxesApplied: taxes === null || taxes === void 0 ? void 0 : taxes.map((tax) => {
            return {
                taxName: tax.printName,
                value: (0, exports.getTaxedSubTotal)(total, tax),
            };
        }),
        taxedTotal: taxes === null || taxes === void 0 ? void 0 : taxes.reduce((a, b) => a + (0, exports.getTaxedSubTotal)(total, b), total),
    };
    return taxAppliedInfo;
};
exports.getAppliedTaxesAndTaxesTotal = getAppliedTaxesAndTaxesTotal;
const getTaxedSubTotal = (total, tax) => {
    if (tax.isPercentage) {
        return +(total * 0.01 * tax.value);
    }
    else {
        return +tax.value;
    }
};
exports.getTaxedSubTotal = getTaxedSubTotal;
const dateTimeToDateHHMM = (dateTime) => luxon_1.DateTime.fromJSDate(dateTime).toLocaleString(luxon_1.DateTime.DATETIME_SHORT);
exports.dateTimeToDateHHMM = dateTimeToDateHHMM;
const dateTimeNowMinus = (hoursToSubtract) => {
    return luxon_1.DateTime.now().minus({ hour: hoursToSubtract }).toJSDate();
};
exports.dateTimeNowMinus = dateTimeNowMinus;
const timesAgoFormat = (datetime) => luxon_1.DateTime.fromISO(datetime).toRelative();
exports.timesAgoFormat = timesAgoFormat;
const getStartOfTheDay = () => luxon_1.DateTime.now().startOf('day').toJSDate();
exports.getStartOfTheDay = getStartOfTheDay;
const getStartOfTheWeek = () => luxon_1.DateTime.now().startOf('week').toJSDate();
exports.getStartOfTheWeek = getStartOfTheWeek;
const getStartOfTheMonth = () => luxon_1.DateTime.now().startOf('month').toJSDate();
exports.getStartOfTheMonth = getStartOfTheMonth;
const getOnlyCurrentDateWithoutTime = () => luxon_1.DateTime.now().toLocaleString(luxon_1.DateTime.DATE_SHORT);
exports.getOnlyCurrentDateWithoutTime = getOnlyCurrentDateWithoutTime;
const aggregateOrderItems = (orderItems) => {
    let totalQuantityCount = 0;
    let totalItemsCount = 0;
    let totalAmount = 0;
    const itemObj = {};
    orderItems.forEach((orderItem) => {
        const key = orderItem.customeKey;
        itemObj[key] = Object.assign(Object.assign({}, (itemObj[key] || {})), Object.assign(Object.assign({}, orderItem), { id: itemObj[key] ? itemObj[key].id : orderItem.id, count: itemObj[key]
                ? itemObj[key].count + orderItem.count
                : orderItem.count }));
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
exports.aggregateOrderItems = aggregateOrderItems;
//# sourceMappingURL=common-util.js.map