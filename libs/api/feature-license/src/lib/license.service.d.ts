import { JwtService } from '@nestjs/jwt';
export declare class ChaviService {
    private jwtService;
    constructor(jwtService: JwtService);
    private readonly logger;
    handleCron(): void;
    orderRunCreate(): Promise<boolean>;
    private getRegistryKey;
    private isRegKeyValid;
    private isDateExpired;
    private isExpired;
    private getCurrentMachineId;
    private chaviKandethuka;
}
