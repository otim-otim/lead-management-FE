import { axiosAdapter } from "./axiosAdapter";
import { createFollowUpParams, FollowUpStatusEnum } from "./types";
import { Lead, CreateLeadParams } from "./types";

export async function fetchLeads(): Promise<{ leads: Lead[] } | { error: any }> {
    try {
        const {data, status} = await axiosAdapter.get('/api/leads');
        if(status !== 200) {
            throw new Error('Failed to fetch leads');
        }
        return { leads: data.data}
    } catch (error) {
        return { error }
    }
}

export async function fetchFollowups() {
    try {
        const {data, status} = await axiosAdapter.get('/api/followups');
        if(status !== 200) {
            throw new Error('Failed to fetch followups');
        }
        return { followups: data.data}
    } catch (error) {
        return { error }
    }
}

export async function createFollowUp(params: createFollowUpParams) {
    try {
        const {data, status} = await axiosAdapter.post('/api/followups', params);
        if(status !== 200) {
            throw new Error('Failed to create followup');
        }
        return { followup: data}
    } catch (error) {
        return { error }
    }
}

export async function createLead(params: CreateLeadParams) {
    try {
        const {data, status} = await axiosAdapter.post('/api/leads', params);
        if(status !== 200) {
            throw new Error('Failed to create lead');
        }
        return { lead: data}
    } catch (error) {
        return { error }
    }
}

export async function updateFollowUpStatus( id: number, newStatus: FollowUpStatusEnum) {
    try {
        const {data, status} = await axiosAdapter.patch(`/api/followups/${id}/${newStatus}`);
        if(status !== 200) {
            throw new Error('Failed to update followup');
        }
        return { followup: data}
    } catch (error) {
        return { error }
    }
}

export async function fetchUsers() {
    try {
        const {data, status} = await axiosAdapter.get('/api/users');
        if(status !== 200) {
            throw new Error('Failed to fetch users');
        }
        return { users: data.data}
    } catch (error) {
        return { error }
    }
}