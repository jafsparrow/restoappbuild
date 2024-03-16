import { JwtService } from '@nestjs/jwt';
export declare class LicenseService {
    private jwtService;
    constructor(jwtService: JwtService);
    private readonly logger;
    handleCron(): void;
    checkLicense(): Promise<void>;
    isLicenseValid(claims: Record<string, any>): boolean;
}
