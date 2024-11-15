
export const  enum FollowUpStatusEnum {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    MISSED = 'Missed'
  }

export interface FollowUp {
    id: number;
    status: FollowUpStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    scheduledAt: Date;
    lead: Lead;
    user: User;
}

export interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export interface createFollowUpParams {
    scheduledAt: Date;
    leadId: number;
    userId: number;
}

 export interface CreateLeadParams extends Omit<Lead, 'id'> {
    id?: null;
}