import { User } from './user';
export interface PosSession {
    id: number;
    startTime: Date;
    endTime?: Date;
    status: SessionStatus;
    createdBy?: User;
}
export declare enum SessionStatus {
    ACTIVE = "active",
    CLOSE = "closed"
}
