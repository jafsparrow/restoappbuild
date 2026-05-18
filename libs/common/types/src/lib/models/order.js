// export interface AppliedTax {
//   name: string;
//   taxValue: number;
// }
export var OrderType;
(function (OrderType) {
    OrderType["TABLE"] = "table";
    OrderType["TAKEAWAY"] = "takeaway";
    OrderType["HOMEDELIVERY"] = "homedelivery";
})(OrderType || (OrderType = {}));
export var OrderItemStatus;
(function (OrderItemStatus) {
    OrderItemStatus["READY"] = "ready";
    OrderItemStatus["INPROGRESS"] = "inprogress";
    OrderItemStatus["WAITING"] = "waiting";
})(OrderItemStatus || (OrderItemStatus = {}));
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PLACED"] = "placed";
    OrderStatus["INPROGRESS"] = "inprogress";
    OrderStatus["READY"] = "ready";
    OrderStatus["SERVED"] = "served";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["PAID"] = "paid";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
export var OrderItemType;
(function (OrderItemType) {
    OrderItemType["NEW"] = "new";
    OrderItemType["RUNNING"] = "running";
})(OrderItemType || (OrderItemType = {}));
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["NOTPAID"] = "notpaid";
    PaymentStatus["CREDIT"] = "credit";
})(PaymentStatus || (PaymentStatus = {}));
//# sourceMappingURL=order.js.map