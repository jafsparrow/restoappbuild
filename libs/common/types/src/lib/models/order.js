"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.OrderItemType = exports.OrderStatus = exports.OrderItemStatus = exports.OrderType = void 0;
// export interface AppliedTax {
//   name: string;
//   taxValue: number;
// }
var OrderType;
(function (OrderType) {
    OrderType["TABLE"] = "table";
    OrderType["TAKEAWAY"] = "takeaway";
    OrderType["HOMEDELIVERY"] = "homedelivery";
})(OrderType || (exports.OrderType = OrderType = {}));
var OrderItemStatus;
(function (OrderItemStatus) {
    OrderItemStatus["READY"] = "ready";
    OrderItemStatus["INPROGRESS"] = "inprogress";
    OrderItemStatus["WAITING"] = "waiting";
})(OrderItemStatus || (exports.OrderItemStatus = OrderItemStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PLACED"] = "placed";
    OrderStatus["INPROGRESS"] = "inprogress";
    OrderStatus["READY"] = "ready";
    OrderStatus["SERVED"] = "served";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["PAID"] = "paid";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var OrderItemType;
(function (OrderItemType) {
    OrderItemType["NEW"] = "new";
    OrderItemType["RUNNING"] = "running";
})(OrderItemType || (exports.OrderItemType = OrderItemType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["NOTPAID"] = "notpaid";
    PaymentStatus["CREDIT"] = "credit";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
//# sourceMappingURL=order.js.map