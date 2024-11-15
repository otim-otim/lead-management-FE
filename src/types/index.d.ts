
export enum FollowUpStatusEnum {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    MISSED = 'Missed'
  }

export interface FollowUp {
    id: string;
    status: FollowUpStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    scheduledAt: Date;
    lead: Lead;
    user: User;
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface createFollowUpParams {
    scheduledAt: Date;
    leadId: number;
    userId: number;
}