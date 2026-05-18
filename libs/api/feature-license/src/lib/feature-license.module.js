import { __decorate, __metadata } from "tslib";
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtModule } from '@nestjs/jwt';
import { ChaviService } from './license.service';
let FeatureLicenseModule = class FeatureLicenseModule {
    constructor(chaviService) {
        this.chaviService = chaviService;
    }
    async onModuleInit() {
        // this.chaviService.orderRunCreate();
        // console.log('module init fired.. check primary license check here.');
        // const keys = ['HKCU\\Software\\Microsoft\\Mathpi\\CurrentVersion'];
        // const result = await list(keys);
        // if (!result[keys[0]].exists) {
        //   // if no key at mathpi location. exit the application
        //   process.exit(1);
        //   return;
        // }
    }
};
FeatureLicenseModule = __decorate([
    Module({
        controllers: [],
        providers: [ChaviService],
        exports: [ChaviService],
        imports: [ScheduleModule.forRoot(), JwtModule],
    }),
    __metadata("design:paramtypes", [ChaviService])
], FeatureLicenseModule);
export { FeatureLicenseModule };
//# sourceMappingURL=feature-license.module.js.map