"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artificialRandomDelay = void 0;
const tslib_1 = require("tslib");
const artificialRandomDelay = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const random = Math.random() * 4000;
    // console.log('random number is ', random);
    return new Promise((resolve) => {
        setTimeout(resolve, random);
    });
});
exports.artificialRandomDelay = artificialRandomDelay;
//# sourceMappingURL=delay.util.js.map