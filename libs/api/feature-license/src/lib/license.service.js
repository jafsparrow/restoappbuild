var ChaviService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { JwtService } from '@nestjs/jwt';
import { list, } from 'regedit-rs';
import { execSync } from 'child_process';
import { createDecipheriv, createHash, scryptSync } from 'crypto';
const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const TAG_LENGTH = 16;
const paths = ['HKEY_LOCAL_MACHINE\\SOFTWARE\\Mdot\\Jenna'];
const key = 'chavi';
let ChaviService = ChaviService_1 = class ChaviService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new Logger(ChaviService_1.name);
    }
    // @Cron('45 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 45');
        // this.orderRunCreate();
    }
    // having a confusing name for the function. to hide the functionality
    async orderRunCreate() {
        return true;
        try {
            const machineId = this.getCurrentMachineId();
            const registryKey = await this.getRegistryKey(paths, key);
            const envKey = process.env['LICENSE_KEY'];
            const result = this.chaviKandethuka(registryKey, envKey, machineId);
            this.isDateExpired(new Date(result.expiresAt));
            // console.log(result);
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
        return true;
        // read the key from registry.
        console.log('checking the application license...');
        // const keys = ['HKCU\\Software\\Microsoft\\Mathpi\\CurrentVersion '];
        // try {
        //   const result = await list(keys);
        //   if (!result[keys[0]].exists) {
        //     // if no key at mathpi location. exit the application
        //     process.exit(1);
        //   }
        //   const registryKey = result[keys[0]].values['chavi'].value as string;
        //   if (!registryKey) {
        //     process.exit(1);
        //   }
        //   const windowsGuid = getHwId();
        //   // console.log(windowsGuid);
        //   // console.log(this.jwtService.verify(registryKey, { secret: windowsGuid }));
        //   const claims: RegKeyClaims = this.jwtService.verify(registryKey, {
        //     secret: windowsGuid,
        //   });
        //   // console.log('claims is ', claims);
        //   // check the expiry from the reg key.
        //   if (!this.isRegKeyValid(claims)) {
        //     console.log('Reg key has been expired.');
        //     process.exit(1);
        //   }
        //   const secretKey = claims.key;
        //   console.log(secretKey);
        //   const appKey = process.env['JENNA_PRODUCT_KEY'] as string;
        //   if (!appKey) {
        //     console.log('No app key found.. Exiting application..');
        //     process.exit(1);
        //   }
        //   // console.log('appkey', appKey);
        //   // if the env key is verified withe key in the registry key, the app should die .
        //   const envKeyClaims: EnvClaims = this.jwtService.verify(appKey, {
        //     secret: secretKey,
        //   });
        //   if (!envKeyClaims) {
        //     console.log('License is expired.. Please contact admin....');
        //     console.log('Exiting the application');
        //     process.exit(1);
        //   }
        //   console.log('License check succeeded...');
        //   return;
        // } catch (error) {
        //   console.log(error);
        //   console.log('error occured while validating the keys.');
        //   process.exit(1);
        // }
    }
    async getRegistryKey(paths, key) {
        const result = await list(paths);
        if (!result[paths[0]].exists) {
            // if no key at mathpi location. exit the application
            throw new Error('1 - Contact Admin');
        }
        const registryKey = result[paths[0]].values[`${key}`].value;
        if (!registryKey) {
            throw new Error('2 - Contact Admin');
        }
        return registryKey;
    }
    isRegKeyValid(claims) {
        const { expiryMilliSeconds } = claims;
        return this.isExpired(expiryMilliSeconds);
    }
    isDateExpired(expiryDate) {
        const expiryDateInSeconds = expiryDate.getTime();
        const currentDateInSeconds = new Date().getTime();
        if (expiryDateInSeconds < currentDateInSeconds) {
            console.log('License has been expired.. ');
            return false;
        }
        return true;
    }
    isExpired(timeInSeconds) {
        const currentDateSeconds = new Date().getTime();
        // console.log(timeInSeconds, currentDateSeconds);
        if (timeInSeconds < currentDateSeconds) {
            console.log('License has been expired.. ');
            throw new Error('License Expired');
        }
        return true;
    }
    getCurrentMachineId() {
        try {
            // Get Motherboard Serial
            const mbSerial = execSync('powershell "Get-CimInstance -ClassName Win32_BaseBoard | Select-Object -ExpandProperty SerialNumber"', { encoding: 'utf8' }).trim();
            // Get CPU ID
            const cpuId = execSync('powershell "Get-CimInstance -ClassName Win32_Processor | Select-Object -ExpandProperty ProcessorId | Select-Object -First 1"', { encoding: 'utf8' }).trim();
            // Get BIOS Serial
            const biosSerial = execSync('powershell "Get-CimInstance -ClassName Win32_BIOS | Select-Object -ExpandProperty SerialNumber"', { encoding: 'utf8' }).trim();
            // Combine and hash
            const combined = mbSerial + cpuId + biosSerial;
            const hash = createHash('md5')
                .update(combined)
                .digest('hex')
                .toUpperCase();
            return hash;
        }
        catch (error) {
            console.error('Error getting machine ID:', error);
            throw error;
        }
    }
    chaviKandethuka(registryKey, envKey, machineId) {
        // Validate inputs
        if (!registryKey || typeof registryKey !== 'string') {
            throw new Error('Invalid or missing registryKey');
        }
        if (!envKey || typeof envKey !== 'string') {
            throw new Error('Invalid or missing envKey');
        }
        if (!machineId || typeof machineId !== 'string') {
            throw new Error('Invalid or missing machineId');
        }
        // Logger.debug('Starting chaviKandethuka decryption process');
        // Logger.debug(`Received registryKey: ${registryKey}`);
        // Logger.debug(`Received envKey: ${envKey}`);
        // Logger.debug(`Received machineId: ${machineId}`);
        // 1. Decrypt the registryKey
        let registryKeyBuffer;
        try {
            registryKeyBuffer = Buffer.from(registryKey, 'hex');
        }
        catch {
            throw new Error('Invalid registryKey format: must be a valid hex string');
        }
        // Check if registryKeyBuffer is long enough for iv, tag, and payload
        if (registryKeyBuffer.length < IV_LENGTH + TAG_LENGTH) {
            throw new Error('registryKey too short: insufficient data for decryption');
        }
        const registryIv = registryKeyBuffer.subarray(0, IV_LENGTH);
        const registryTag = registryKeyBuffer.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
        const registryEncryptedPayload = registryKeyBuffer.subarray(IV_LENGTH + TAG_LENGTH);
        const registryEncryptionKey = scryptSync(machineId, Buffer.from(''), 32);
        let registryDecipher;
        try {
            registryDecipher = createDecipheriv(ALGORITHM, registryEncryptionKey, registryIv);
            registryDecipher.setAuthTag(registryTag);
        }
        catch {
            throw new Error('Failed to initialize registryKey decryption: possible key mismatch');
        }
        let registryDecrypted;
        try {
            registryDecrypted = Buffer.concat([
                registryDecipher.update(registryEncryptedPayload),
                registryDecipher.final(),
            ]);
        }
        catch {
            throw new Error('registryKey decryption failed: incorrect machineId or corrupted key');
        }
        let registryPayload;
        try {
            registryPayload = JSON.parse(registryDecrypted.toString('utf8'));
        }
        catch {
            throw new Error('Failed to parse registryKey payload: invalid data format');
        }
        if (!registryPayload.realKey || !registryPayload.expiresAt) {
            throw new Error('Invalid registryKey payload: missing realKey or expiresAt');
        }
        // 2. Decrypt the envKey
        let envKeyBuffer;
        try {
            envKeyBuffer = Buffer.from(envKey, 'hex');
        }
        catch {
            throw new Error('Invalid envKey format: must be a valid hex string');
        }
        if (envKeyBuffer.length < IV_LENGTH + TAG_LENGTH) {
            throw new Error('envKey too short: insufficient data for decryption');
        }
        const envIv = envKeyBuffer.subarray(0, IV_LENGTH);
        const envTag = envKeyBuffer.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
        const envEncryptedPayload = envKeyBuffer.subarray(IV_LENGTH + TAG_LENGTH);
        const envEncryptionKey = scryptSync(JSON.stringify(registryPayload), Buffer.from(''), 32);
        let envDecipher;
        try {
            envDecipher = createDecipheriv(ALGORITHM, envEncryptionKey, envIv);
            envDecipher.setAuthTag(envTag);
        }
        catch {
            throw new Error('Failed to initialize envKey decryption: possible key mismatch');
        }
        let envDecrypted;
        try {
            envDecrypted = Buffer.concat([
                envDecipher.update(envEncryptedPayload),
                envDecipher.final(),
            ]);
        }
        catch (error) {
            console.log('Error during envKey decryption:', error);
            throw new Error('envKey decryption failed: incorrect registryKey payload or corrupted key');
        }
        let envPayload;
        try {
            envPayload = JSON.parse(envDecrypted.toString('utf8'));
        }
        catch {
            throw new Error('Failed to parse envKey payload: invalid data format');
        }
        if (!envPayload.realKey || !envPayload.expiresAt) {
            throw new Error('Invalid envKey payload: missing realKey or expiresAt');
        }
        return envPayload; // Returns { realKey, expiresAt }
    }
};
__decorate([
    Cron('0 10,17 * * *') // at 10 AM and 5 PM everyday
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChaviService.prototype, "handleCron", null);
ChaviService = ChaviService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService])
], ChaviService);
export { ChaviService };
//# sourceMappingURL=license.service.js.map