import { OnModuleInit } from '@nestjs/common';
import { ChaviService } from './license.service';
export declare class FeatureLicenseModule implements OnModuleInit {
    private chaviService;
    constructor(chaviService: ChaviService);
    onModuleInit(): Promise<void>;
}
