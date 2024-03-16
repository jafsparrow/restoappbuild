"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureLicenseModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const license_service_1 = require("./license.service");
const jwt_1 = require("@nestjs/jwt");
let FeatureLicenseModule = class FeatureLicenseModule {
    onModuleInit() {
        console.log('module init fired.. check primary license check here.');
    }
};
exports.FeatureLicenseModule = FeatureLicenseModule;
exports.FeatureLicenseModule = FeatureLicenseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [license_service_1.LicenseService],
        exports: [],
        imports: [schedule_1.ScheduleModule.forRoot(), jwt_1.JwtModule],
    })
], FeatureLicenseModule);
//# sourceMappingURL=feature-license.module.js.map