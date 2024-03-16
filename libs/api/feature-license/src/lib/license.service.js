"use strict";
var LicenseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const jwt_1 = require("@nestjs/jwt");
const hwid2_1 = require("hwid2");
const regedit_rs_1 = require("regedit-rs");
let LicenseService = LicenseService_1 = class LicenseService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(LicenseService_1.name);
    }
    handleCron() {
        this.logger.debug('Called when the current second is 45');
        // this.checkLicense();
    }
    async checkLicense() {
        // read the key from registry.
        const keys = ['HKCU\\Software\\Microsoft\\Mathpi\\CurrentVersion'];
        const result = await (0, regedit_rs_1.list)(keys);
        if (!result[keys[0]].exists) {
            return;
        }
        const registryKey = result[keys[0]].values['chavi'].value;
        const windowsGuid = (0, hwid2_1.getHwId)();
        console.log(windowsGuid);
        // console.log(this.jwtService.verify(registryKey, { secret: windowsGuid }));
        try {
            const claims = this.jwtService.verify(registryKey, {
                secret: windowsGuid,
            });
            const secretKey = claims.secretKey;
            console.log(secretKey);
            const appKey = process.env['APP_KEY'];
            if (!appKey) {
                console.log('No app key found.. Exiting application..');
                process.exit(1);
            }
            console.log('appkey', appKey);
            const envKeyClaims = this.jwtService.verify(appKey, {
                secret: secretKey,
            });
            if (!this.isLicenseValid(envKeyClaims)) {
                console.log('License is expired.. Please contact admin....');
                console.log('Exiting the application');
                process.exit(1);
                return;
            }
            console.log('License check succeeded...');
            return;
        }
        catch (error) {
            console.log(error);
            console.log('error occured while validating the keys.');
        }
        // console.log(result);
        // console.log(nameValue);
        // read the windows guuid.
        // const key = 'HKCU\\Software\\Microsoft\\Mathpi\\CurrentVersion\\chavi';
        // reg.values()
    }
    isLicenseValid(claims) {
        try {
            const issuedAt = claims['iat'];
            const expiryAt = claims['expiryAt'];
            const licenseType = claims['licenseType'];
            const currentDateSeconds = new Date().getTime() / 1000;
            if (expiryAt < currentDateSeconds) {
                console.log('License has been expired.. ');
                return false;
            }
            return true;
        }
        catch (error) {
            console.log('Error occured while validatig the license...');
            return false;
        }
    }
};
exports.LicenseService = LicenseService;
tslib_1.__decorate([
    (0, schedule_1.Cron)('45 * * * * *'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LicenseService.prototype, "handleCron", null);
exports.LicenseService = LicenseService = LicenseService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [jwt_1.JwtService])
], LicenseService);
//# sourceMappingURL=license.service.js.map